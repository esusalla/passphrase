import PropTypes from 'prop-types';
import React from 'react';

function CreateForm(props) {
  const { handleInputChange, handleSubmit, handleViewChange, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input onChange={handleInputChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <input type="submit" value="CREATE GAME" />
      <button onClick={handleViewChange} type="button" value="">BACK</button>
    </form>
  );
}

CreateForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleViewChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateForm;
