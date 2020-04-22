import PropTypes from 'prop-types';
import React from 'react';

function CreateForm(props) {
  const { handleChange, handleSubmit, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <input type="submit" value="CREATE GAME" />
    </form>
  );
}

CreateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateForm;
