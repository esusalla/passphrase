import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { connectSocket } from '../../shared/actions';
import { gameStages, nameLengthLimit } from '../../shared/constants';
import CreateForm from '../components/CreateForm';

function CreateFormContainer() {
  // Global state
  const gameStage = useSelector(state => state.gameStage);

  // Local state
  const [name, setName] = useState('');

  // Global state changes
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    if (name) {
      const url = `ws://192.168.1.21:8080/create?name=${name}`; // TODO: update URL for deployment
      dispatch(connectSocket(url));
    }
  };

  // Local state changes
  const handleChange = event => { if (event.target.value.length <= nameLengthLimit) setName(event.target.value); };

  if (gameStage === gameStages.SETUP) return <Redirect to="/setup" />;
  return (
    <CreateForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name} />
  );
}

export default CreateFormContainer;
