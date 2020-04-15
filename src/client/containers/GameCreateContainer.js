import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GameCreate from '../components/GameCreate';
import { CONNECT_SOCKET } from '../actions';

function GameCreateContainer() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => setName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `ws://localhost:8080/create?name=${name}`;
    dispatch({ type: CONNECT_SOCKET, url });
  };

  return <GameCreate handleChange={handleChange} handleSubmit={handleSubmit} name={name} />;
}

export default GameCreateContainer;
