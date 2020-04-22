import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';
import GameEnd from '../components/GameEnd';

function GameEndContainer() {
  // Global state
  const audio = useSelector(state => state.audio);
  const audioTimeout = useSelector(state => state.audioTimeout);
  const gameStage = useSelector(state => state.gameStage);
  const hostName = useSelector(state => state.hostName);
  const name = useSelector(state => state.name);
  const teamOneScore = useSelector(state => state.teamOneScore);
  const teamTwoScore = useSelector(state => state.teamTwoScore);

  // Global state changes
  const dispatch = useDispatch();
  const handleRestartGame = () => dispatch(actions.restartGame());

  useEffect(() => {
    // Play trumpets on round end transition to game end
    if (audio) audio.pause();
    clearTimeout(audioTimeout);
    const trumpets = new Audio('./audio/trumpets.mp3');
    trumpets.play();
  }, [gameStage]);

  return (
    <GameEnd
      handleRestartGame={handleRestartGame}
      hostName={hostName}
      name={name}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default GameEndContainer;
