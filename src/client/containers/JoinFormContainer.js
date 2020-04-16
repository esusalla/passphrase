import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import JoinForm from '../components/JoinForm';
import { CONNECT_SOCKET } from '../actions';

const nameLengthLimit = 16;

function JoinFormContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      gameCode: '',
    },
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!(name === 'name' && value.length > nameLengthLimit)) setInput({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.name && input.gameCode) {
      const url = `ws://localhost:8080/join?name=${input.name}&gameCode=${input.gameCode}`;
      dispatch({ type: CONNECT_SOCKET, url });
    }
  };

  if (connected && gameCode) return <Redirect to="/lobby" />;
  return <JoinForm gameCode={input.gameCode} handleChange={handleChange} handleSubmit={handleSubmit} name={input.name} />;
}

export default JoinFormContainer;
