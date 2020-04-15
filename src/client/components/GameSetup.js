import PropTypes from 'prop-types';
import React from 'react';

function GameSetup(props) {
  const { teamOne, teamTwo } = props;
  const teamOneList = teamOne.map((playerName) => <li key={playerName}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <h2>SETUP</h2>
      <h6>Team One</h6>
      <ul>{teamOneList}</ul>
      <h6>Team Two</h6>
      <ul>{teamTwoList}</ul>
    </div>
  );
}

GameSetup.propTypes = {
  teamOne: PropTypes.arrayOf(PropTypes.string),
  teamTwo: PropTypes.arrayOf(PropTypes.string),
};
export default GameSetup;
