import PropTypes from 'prop-types';
import React from 'react';

function GameEnd(props) {
  const { handleRestartGame, teamOneScore, teamTwoScore } = props;
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
    </div>
  );
}

GameEnd.propTypes = {
  handleRestartGame: PropTypes.func,
  teamOneScore: PropTypes.number,
  teamTwoScore: PropTypes.number,
};

export default GameEnd;
