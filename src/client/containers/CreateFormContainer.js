import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CreateForm from '../components/CreateForm';
import { CONNECT_SOCKET } from '../actions';

const nameLengthLimit = 16;

function CreateFormContainer() {
  const connected = useSelector((state) => state.connected);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (event) => {
    if (event.target.value.length <= nameLengthLimit) setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const url = `ws://localhost:8080/create?name=${name}`;
      dispatch({ type: CONNECT_SOCKET, url });
    }
  };

  if (connected) return <Redirect to="/setup" />;
  return <CreateForm handleChange={handleChange} handleSubmit={handleSubmit} name={name} />;
}

export default CreateFormContainer;
