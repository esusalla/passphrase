import PropTypes from 'prop-types';
import React from 'react';

function GameJoin(props) {
  const { gameCode, handleChange, handleSubmit, name } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input id="name" onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <label htmlFor="gameCode">
        Game Code
        <input id="gameCode" onChange={handleChange} name="gameCode" placeholder="Game Code" type="text" value={gameCode} />
      </label>
      <input type="submit" value="Join Game" />
    </form>
  );
}

GameJoin.propTypes = {
  gameCode: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};

export default GameJoin;
