import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { nameLengthLimit } from '../../shared/constants';
import { CONNECT_SOCKET } from '../actions';
import JoinForm from '../components/JoinForm';

function JoinFormContainer(props) {
  const { handleViewChange } = props;
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
  const handleInputChange = event => {
    const { name, value } = event.target;
    // Update input unless it's name input and exceeding allowed length
    if (!(name === 'name' && value.length > nameLengthLimit)) setInput({ [name]: value });
  };

  return (
    <JoinForm
      gameCode={input.gameCode}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleViewChange={handleViewChange}
      name={input.name}
    />
  );
}

JoinFormContainer.propTypes = {
  handleViewChange: PropTypes.func.isRequired,
};

export default JoinFormContainer;
