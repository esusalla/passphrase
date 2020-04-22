import PropTypes from 'prop-types';
import React from 'react';

function GameEnd(props) {
  const { handleRestartGame, hostName, name, teamOneScore, teamTwoScore } = props;

  return (
    <div>
      <p>GAME ENDED</p>
      <p>{`Team ${teamOneScore > teamTwoScore ? 'One' : 'Two'} Wins!`}</p>
      <p>{`Team One: ${teamOneScore}`}</p>
      <p>{`Team Two: ${teamTwoScore}`}</p>
      {name === hostName ? <button onClick={handleRestartGame} type="button">RESTART GAME</button> : null}
    </div>
  );
}

GameEnd.propTypes = {
  handleRestartGame: PropTypes.func.isRequired,
  hostName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teamOneScore: PropTypes.number.isRequired,
  teamTwoScore: PropTypes.number.isRequired,
};

export default GameEnd;
