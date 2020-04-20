import PropTypes from 'prop-types';
import React from 'react';

function GameEnd(props) {
  const { handleRestartGame, hostName, name, teamOneScore, teamTwoScore } = props;
  return (
    <div>
      <p>GAME ENDED</p>
      <p>
        Team
        {teamOneScore > teamTwoScore ? ' One ' : ' Two '}
        Wins!
      </p>
      <p>{`Team One: ${teamOneScore}`}</p>
      <p>{`Team Two: ${teamTwoScore}`}</p>
      {name === hostName ? <button onClick={handleRestartGame} type="submit">Restart Game</button> : null}
    </div>
  );
}

GameEnd.propTypes = {
  handleRestartGame: PropTypes.func,
  hostName: PropTypes.string,
  name: PropTypes.string,
  teamOneScore: PropTypes.number,
  teamTwoScore: PropTypes.number,
};

export default GameEnd;
