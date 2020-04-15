import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import GameJoin from '../components/GameJoin';
import { CONNECT_SOCKET } from '../actions';

function GameJoinContainer() {
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
    setInput({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `ws://localhost:8080/join?name=${input.name}&gameCode=${input.gameCode}`;
    dispatch({ type: CONNECT_SOCKET, url });
  };

  return <GameJoin gameCode={input.gameCode} handleChange={handleChange} handleSubmit={handleSubmit} name={input.name} />;
}

export default GameJoinContainer;
