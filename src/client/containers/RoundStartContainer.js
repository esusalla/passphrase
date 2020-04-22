import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';
import RoundStart from '../components/RoundStart';

function RoundStartContainer() {
  // Global state
  const audio = useSelector(state => state.audio);
  const audioTimeout = useSelector(state => state.audioTimeout);
  const name = useSelector(state => state.name);
  const gameStage = useSelector(state => state.gameStage);
  const playerOrder = useSelector(state => state.playerOrder);
  const teamOneScore = useSelector(state => state.teamOneScore);
  const teamTwoScore = useSelector(state => state.teamTwoScore);

  // Global state changes
  const dispatch = useDispatch();
  const handleStartRound = () => dispatch(actions.startRound());

  useEffect(() => {
    // Play buzz on round active transition back to round start except for first round
    // Test if first round by checking if either team has scored
    if (teamOneScore || teamTwoScore) {
      if (audio) audio.pause();
      clearTimeout(audioTimeout);
      const buzz = new Audio('./audio/buzz.mp3');
      buzz.play();
    }
  }, [gameStage]);

  return (
    <RoundStart
      name={name}
      handleStartRound={handleStartRound}
      playerOrder={playerOrder}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default RoundStartContainer;
