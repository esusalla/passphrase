import PropTypes from 'prop-types';
import React from 'react';

function JoinForm(props) {
  const { gameCode, handleInputChange, handleSubmit, handleViewChange, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input onChange={handleInputChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <label htmlFor="gameCode">
        Game Code
        <input onChange={handleInputChange} name="gameCode" placeholder="Game Code" type="text" value={gameCode} />
      </label>
      <input type="submit" value="JOIN GAME" />
      <button onClick={handleViewChange} type="button" value="">BACK</button>
    </form>
  );
}

JoinForm.propTypes = {
  gameCode: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleViewChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default JoinForm;
