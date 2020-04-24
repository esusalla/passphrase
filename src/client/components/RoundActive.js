import PropTypes from 'prop-types';
import React from 'react';

function RoundActive(props) {
  const {
    currentWord,
    handlePassToNextPlayer,
    handleUseSkip,
    lastWord, name,
    playerOrder,
    skipsAvailable,
    teamOneScore,
    teamTwoScore,
  } = props;
  const playerOrderList = playerOrder.map((playerName) => <li key={playerName}>{playerName}</li>);

  const currentPlayerInfo = (
    <div>
      <p>{currentWord}</p>
      <button onClick={handleUseSkip} type="submit">SKIP WORD</button>
      <p>{`Skips available: ${skipsAvailable}`}</p>
      <button onClick={handlePassToNextPlayer} type="button">PASS TO NEXT PLAYER</button>
    </div>
  );

  const turnMsg = () => {
    // Check if player is up next and alert them if they are
    if (playerOrder[1] === name) return <p>You&apos;re up next. Be ready!</p>;

    // Check if player's current team is up and alert them whether to guess or not
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
  currentWord: PropTypes.string.isRequired,
  handlePassToNextPlayer: PropTypes.func.isRequired,
  handleUseSkip: PropTypes.func.isRequired,
  lastWord: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playerOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  skipsAvailable: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  teamOneScore: PropTypes.number.isRequired,
  teamTwoScore: PropTypes.number.isRequired,
};

export default RoundActive;
