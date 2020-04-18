import PropTypes from 'prop-types';
import React from 'react';

function RoundStart(props) {
  const { name, handleStartRound, playerOrder, teamOneScore, teamTwoScore } = props;
  const playerOrderList = playerOrder.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <p>ROUND START</p>
      <p>{`Team One: ${teamOneScore}`}</p>
      <p>{`Team Two: ${teamTwoScore}`}</p>
      <ul>{playerOrderList}</ul>
      {playerOrder[0] === name ? <button onClick={handleStartRound} type="submit">Start Round</button> : null}
    </div>
  );
}

RoundStart.propTypes = {
  handleStartRound: PropTypes.func,
  name: PropTypes.string,
  playerOrder: PropTypes.arrayOf(PropTypes.string),
  teamOneScore: PropTypes.number,
  teamTwoScore: PropTypes.number,
};

export default RoundStart;
