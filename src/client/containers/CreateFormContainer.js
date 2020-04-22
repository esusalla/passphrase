import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { nameLengthLimit } from '../../shared/constants';
import CreateForm from '../components/CreateForm';
import { CONNECT_SOCKET } from '../actions';

function CreateFormContainer(props) {
  const { handleViewChange } = props;

  // Local state
  const [name, setName] = useState('');

  // Global state changes
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    if (name) {
      const url = `ws://192.168.1.21:8080/create?name=${name}`; // TODO: update URL for deployment
      dispatch({ type: CONNECT_SOCKET, url });
    }
  };

  // Local state changes
  const handleInputChange = event => { if (event.target.value.length <= nameLengthLimit) setName(event.target.value); };

  return (
    <CreateForm
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleViewChange={handleViewChange}
      name={name} />
  );
}

CreateFormContainer.propTypes = {
  handleViewChange: PropTypes.func.isRequired,
};

export default CreateFormContainer;
