import PropTypes from 'prop-types';
import React from 'react';

function Setup(props) {
  const { gameCode, teamOne, teamTwo } = props;
  const teamOneList = teamOne.map((playerName) => <li key={playerName}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <h2>{`SETUP (${gameCode})`}</h2>
      <h5>Team One</h5>
      <ul>{teamOneList}</ul>
      <h5>Team Two</h5>
      <ul>{teamTwoList}</ul>
    </div>
  );
}

Setup.propTypes = {
  gameCode: PropTypes.string,
  teamOne: PropTypes.arrayOf(PropTypes.string),
  teamTwo: PropTypes.arrayOf(PropTypes.string),
};
export default Setup;
