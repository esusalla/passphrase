import PropTypes from 'prop-types';
import React from 'react';

function JoinForm(props) {
  const { gameCode, handleChange, handleSubmit, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <label htmlFor="gameCode">
        Game Code
        <input onChange={handleChange} name="gameCode" placeholder="Game Code" type="text" value={gameCode} />
      </label>
      <input type="submit" value="JOIN GAME" />
    </form>
  );
}

JoinForm.propTypes = {
  gameCode: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default JoinForm;
