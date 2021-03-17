import PropTypes from "prop-types";
import React from "react";

function RoundStart(props) {
  const { name, handleStartRound, playerOrder, teamOneScore, teamTwoScore } = props;
  const playerOrderList = playerOrder.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <p>ROUND START</p>
      <p>{`Team One: ${teamOneScore}`}</p>
      <p>{`Team Two: ${teamTwoScore}`}</p>
      <ul>{playerOrderList}</ul>
      {playerOrder[0] === name ? <button onClick={handleStartRound} type="button">START ROUND</button> : null}
    </div>
  );
}

RoundStart.propTypes = {
  handleStartRound: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  playerOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamOneScore: PropTypes.number.isRequired,
  teamTwoScore: PropTypes.number.isRequired,
};

export default RoundStart;
