import PropTypes from 'prop-types';
import React from 'react';

function GameLobby(props) {
  const { gameCode, hostName, teamOne, teamTwo } = props;
  const teamOneList = teamOne.map((playerName) => <li key={playerName}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <h2>{`LOBBY (${gameCode})`}</h2>
      <h4>{`Your host is ${hostName}`}</h4>
      <h5>Team One</h5>
      <ul>{teamOneList}</ul>
      <h5>Team Two</h5>
      <ul>{teamTwoList}</ul>
    </div>
  );
}

GameLobby.propTypes = {
  gameCode: PropTypes.string,
  hostName: PropTypes.string,
  teamOne: PropTypes.arrayOf(PropTypes.string),
  teamTwo: PropTypes.arrayOf(PropTypes.string),
};
export default GameLobby;
