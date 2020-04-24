import React, { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { passToNextPlayer, useSkip } from '../../shared/actions';
import { gameStages, tickRunTimeOne, tickRunTimeTwo } from '../../shared/constants';
import RoundActive from '../components/RoundActive';

function RoundActiveContainer() {
  // Global state
  const connected = useSelector(state => state.connected);
  const currentWord = useSelector(state => state.currentWord);
  const elapsedRoundTime = useSelector(state => state.elapsedRoundTime);
  const gameStage = useSelector(state => state.gameStage);
  const lastWord = useSelector(state => state.lastWord);
  const name = useSelector(state => state.name);
  const playerOrder = useSelector(state => state.playerOrder);
  const skipsAllowed = useSelector(state => state.skipsAllowed);
  const skipsAvailable = useSelector(state => state.skipsAvailable);
  const teamOneScore = useSelector(state => state.teamOneScore);
  const teamTwoScore = useSelector(state => state.teamTwoScore);

  // Local state
  const [audio, setAudio] = useState(new Audio());
  const [audioTimeout, setAudioTimeout] = useState(null);

  // Global state changes
  const dispatch = useDispatch();
  const handlePassToNextPlayer = () => dispatch(passToNextPlayer());
  const handleUseSkip = () => { if (skipsAvailable === 'Unlimited' || skipsAvailable > 0) dispatch(useSkip()); };

  const loopAudio = audioFile => {
    const newAudio = new Audio(audioFile);
    newAudio.loop = true;
    newAudio.play();
    setAudio(newAudio);
    return newAudio;
  };

  const clearAudio = () => {
    if (audio) audio.pause();
    clearTimeout(audioTimeout);
  }

  // Handle all audio effects
  useEffect(() => {
    if (gameStage === gameStages.ROUND_ACTIVE) {
      // Adjust timers by elapsed round time in order to sync audio for any player that reconnects mid-round
      const timerOne = Math.max(0, tickRunTimeOne - elapsedRoundTime);
      const timerTwo = Math.max(0, tickRunTimeTwo - Math.max(0, elapsedRoundTime - tickRunTimeOne));

      // Play increasingly faster tick tocks as active round progresses
      // Ternary expressions used to prevent audio loading if not needed due to player reconnecting mid-round
      let tickTock = timerOne ? loopAudio('./audio/tick-tock-1.mp3') : null;
      let timeout = setTimeout(() => {
        if (tickTock) tickTock.pause();
        tickTock = timerTwo ? loopAudio('./audio/tick-tock-2.mp3') : null;
        timeout = setTimeout(() => {
          if (tickTock) tickTock.pause();
          tickTock = loopAudio('./audio/tick-tock-3.mp3');
        }, timerTwo);
        setAudioTimeout(timeout);
      }, timerOne);
      setAudioTimeout(timeout);
    } else if (gameStage === gameStages.ROUND_START) {
      // Play buzz on round end transition back to round start
      clearAudio();
      const buzz = new Audio('./audio/buzz.mp3');
      buzz.play();
    } else if (gameStage === gameStages.GAME_END) {
      // Play trumpets on round end transition to game end
      clearAudio();
      const trumpets = new Audio('./audio/trumpets.mp3');
      trumpets.play();
    } else if (!connected) {
      // Cancel all audio if socket is disconnected
      clearAudio();
    }
  }, [connected, gameStage]);

  if (!connected) return <Redirect to="/" />;
  if (gameStage === gameStages.ROUND_START) return <Redirect to="/round-start" />;
  if (gameStage === gameStages.GAME_END) return <Redirect to="/game-end" />;
  return (
    <RoundActive
      currentWord={currentWord}
      handlePassToNextPlayer={handlePassToNextPlayer}
      handleUseSkip={handleUseSkip}
      lastWord={lastWord}
      name={name}
      playerOrder={playerOrder}
      skipsAvailable={skipsAvailable}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default RoundActiveContainer;
