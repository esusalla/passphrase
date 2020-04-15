import PropTypes from 'prop-types';
import React from 'react';

function GameCreate(props) {
  const { handleChange, handleSubmit, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input id="name" onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <input type="submit" value="Create Game" />
    </form>
  );
}

GameCreate.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};

export default GameCreate;
