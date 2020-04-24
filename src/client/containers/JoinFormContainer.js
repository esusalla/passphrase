import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { connectSocket } from '../../shared/actions';
import { baseUrl, gameStages, nameLengthLimit } from '../../shared/constants';
import JoinForm from '../components/JoinForm';

function JoinFormContainer(props) {
  const { location } = props;
  const params = new URLSearchParams(location.search);
  const gameCode = params.has('gamecode') ? params.get('gamecode').toUpperCase() : '';

  // Global state
  const gameStage = useSelector((state) => state.gameStage);

  // Local State
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: sessionStorage.getItem('name') || '',
      // Use game code from URL, followed by URL from session storage if either are present
      gameCode: gameCode || sessionStorage.getItem('gameCode') || '',
    },
  );

  // Global state changes
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.name && input.gameCode) {
      const uuid = sessionStorage.getItem('uuid');
      const url = `ws://${baseUrl}/join?name=${input.name}&gameCode=${input.gameCode}&uuid=${uuid}`;
      dispatch(connectSocket(url));
    }
  };

  // Local state changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update input unless it's name input and exceeds allowed length
    if (!(name === 'name' && value.length > nameLengthLimit)) setInput({ [name]: value });
  };

  // Multiple redirects for handling a player who disconnects during a game and then reconnects
  switch (gameStage) {
    case gameStages.SETUP: return <Redirect to="/setup" />;
    case gameStages.ROUND_START: return <Redirect to="/round-start" />;
    case gameStages.ROUND_ACTIVE: return <Redirect to="/round-active" />;
    case gameStages.GAME_END: return <Redirect to="/game-end" />;
    default:
      return (
        <JoinForm
          gameCode={input.gameCode}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          name={input.name}
        />
      );
  }
}

JoinFormContainer.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string.isRequired }),
};

JoinFormContainer.defaultProps = {
  location: { search: '' },
};

export default JoinFormContainer;
