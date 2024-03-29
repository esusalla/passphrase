import PropTypes from "prop-types";
import React from "react";

function Lobby(props) {
  const { category, gameCode, hostName, skipsAllowed, teamOne, teamTwo } = props;
  const teamOneList = teamOne.map((playerName) => <li key={playerName}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName}>{playerName}</li>);

  return (
    <div>
      <h2>{`LOBBY (${gameCode})`}</h2>
      <h4>{`Your host is ${hostName}`}</h4>
      <p>{`Category: ${category}`}</p>
      <p>{`Skips allowed per turn: ${skipsAllowed}`}</p>
      <h5>Team One</h5>
      <ul>{teamOneList}</ul>
      <h5>Team Two</h5>
      <ul>{teamTwoList}</ul>
    </div>
  );
}

Lobby.propTypes = {
  category: PropTypes.string.isRequired,
  gameCode: PropTypes.string.isRequired,
  hostName: PropTypes.string.isRequired,
  skipsAllowed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  teamOne: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamTwo: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Lobby;
