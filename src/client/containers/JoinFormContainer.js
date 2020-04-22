import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { nameLengthLimit } from '../../shared/constants';
import { CONNECT_SOCKET } from '../actions';
import JoinForm from '../components/JoinForm';

function JoinFormContainer() {
  // Global state
  const gameStage = useSelector(state => state.gameStage);

  // Local State
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: sessionStorage.getItem('name') || '',
      gameCode: sessionStorage.getItem('gameCode') || '',
    },
  );

  // Global state changes
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    if (input.name && input.gameCode) {
      const uuid = sessionStorage.getItem('uuid');
      const url = `ws://192.168.1.21:8080/join?name=${input.name}&gameCode=${input.gameCode}&uuid=${uuid}`; // TODO: update URL for deployment
      dispatch({ type: CONNECT_SOCKET, url });
    }
  };

  // Local state changes
  const handleChange = event => {
    const { name, value } = event.target;
    // Update input unless it's name input and exceeding allowed length
    if (!(name === 'name' && value.length > nameLengthLimit)) setInput({ [name]: value });
  };

  // Multiple redirects for handling a player who disconnects during a game and then reconnects
  switch (gameStage) {
    case 'setup': return <Redirect to="/setup" />;
    case 'roundStart': return <Redirect to="/round-start" />;
    case 'roundActive': return <Redirect to="/round-active" />;
    case 'gameEnd': return <Redirect to="/game-end" />;
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

export default JoinFormContainer;
