import PropTypes from 'prop-types';
import React from 'react';

function RoundActive(props) {
  const { currentWord, handlePassToNextPlayer, handleUseSkip, lastWord, name, playerOrder, skipsAvailable, teamOneScore, teamTwoScore } = props;
  const playerOrderList = playerOrder.map((playerName) => <li key={playerName}>{playerName}</li>);

  const currentPlayerInfo = (
    <div>
      <p>{currentWord}</p>
      <button onClick={handleUseSkip} type="submit">SKIP</button>
      <p>{`Skips available: ${skipsAvailable}`}</p>
      <button onClick={handlePassToNextPlayer} type="submit">PASS TO NEXT</button>
    </div>
  );

  const turnMsg = () => {
    if (playerOrder[1] === name) return <p>You're up next. Be ready!</p>;
    if (playerOrder.indexOf(name) % 2 === 0) return <p>Your team is up. You should GUESS!</p>;
    return <p>The other team is up. You should NOT GUESS!</p>;
  };

  const otherPlayerInfo = (
    <div>
      {lastWord ? <p>{`Last word: ${lastWord}`}</p> : null}
      {turnMsg()}
      <ul>{playerOrderList}</ul>
    </div>
  );

  return (
    <div>
      <p>ROUND ACTIVE</p>
      <p>{`Team One: ${teamOneScore}`}</p>
      <p>{`Team Two: ${teamTwoScore}`}</p>
      {playerOrder[0] === name ? currentPlayerInfo : otherPlayerInfo}
    </div>
  );
}

RoundActive.propTypes = {
  currentWord: PropTypes.string,
  handlePassToNextPlayer: PropTypes.func,
  handleUseSkip: PropTypes.func,
  lastWord: PropTypes.string,
  name: PropTypes.string,
  playerOrder: PropTypes.arrayOf(PropTypes.string),
  skipsAvailable: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  teamOneScore: PropTypes.number,
  teamTwoScore: PropTypes.number,
};

export default RoundActive;
