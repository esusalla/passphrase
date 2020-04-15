import PropTypes from 'prop-types';
import React from 'react';

function GameLobby(props) {
  const { hostName, teamOne, teamTwo } = props;
  const teamOneList = teamOne.map((playerName) => <li key={playerName}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <h2>LOBBY</h2>
      <h4>
        {`Your host is ${hostName}`}
      </h4>
      <h6>Team One</h6>
      <ul>{teamOneList}</ul>
      <h6>Team Two</h6>
      <ul>{teamTwoList}</ul>
    </div>
  );
}

GameLobby.propTypes = {
  hostName: PropTypes.string,
  teamOne: PropTypes.arrayOf(PropTypes.string),
  teamTwo: PropTypes.arrayOf(PropTypes.string),
};
export default GameLobby;
