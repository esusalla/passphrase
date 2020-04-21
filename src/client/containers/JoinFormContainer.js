import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import JoinForm from '../components/JoinForm';
import { CONNECT_SOCKET } from '../actions';

const nameLengthLimit = 16;

function JoinFormContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const gameStage = useSelector((state) => state.gameStage);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '' || sessionStorage.getItem('name'),
      gameCode: '' || sessionStorage.getItem('gameCode'),
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
      const url = `ws://192.168.1.21:8080/join?name=${input.name}&gameCode=${input.gameCode}&uuid=${sessionStorage.getItem('uuid')}`; // TODO: update URL for deployment
      dispatch({ type: CONNECT_SOCKET, url });
    }
  };

  // Handle redirects for reconnect players or send to lobby after connect
  if (gameStage === 'roundStart') return <Redirect to="/round-start" />;
  if (gameStage === 'roundActive') return <Redirect to="/round-active" />;
  if (gameStage === 'end') return <Redirect to="/end" />;
  if (connected && gameCode) return <Redirect to="/lobby" />;
  return <JoinForm gameCode={input.gameCode} handleChange={handleChange} handleSubmit={handleSubmit} name={input.name} />;
}

export default JoinFormContainer;
