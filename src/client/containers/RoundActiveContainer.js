import React, { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { roundActiveAudioOne, roundActiveAudioTwo } from '../../shared/constants';
import * as actions from '../actions';
import RoundActive from '../components/RoundActive';

function RoundActiveContainer() {
  // Global state
  const connected = useSelector(state => state.connected);
  const currentWord = useSelector(state => state.currentWord);
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
  const handlePassToNextPlayer = () => {
    batch(() => {
      dispatch(actions.passToNextPlayer());
      dispatch(actions.setSkipsAvailable(skipsAllowed));
      dispatch(actions.setCurrentWord(''));
    });
  };
  const handleUseSkip = () => { if (skipsAvailable === 'Unlimited' || skipsAvailable > 0) dispatch(actions.useSkip()); };

  const loopAudio = audioFile => {
    const newAudio = new Audio(audioFile);
    newAudio.loop = true;
    newAudio.play();
    setAudio(newAudio);
    return newAudio;
  };

  const clearAudio = () => {
    audio.pause();
    clearTimeout(audioTimeout);
  }

  // Handle all audio effects
  useEffect(() => {
    if (gameStage === 'roundActive') {
      // Play increasingly faster tick tocks as active round progresses
      let tickTock = loopAudio('./audio/tick-tock-1.mp3');
      let timeout = setTimeout(() => {
        tickTock.pause();
        tickTock = loopAudio('./audio/tick-tock-2.mp3');
        timeout = setTimeout(() => {
          tickTock.pause();
          tickTock = loopAudio('./audio/tick-tock-3.mp3');
        }, roundActiveAudioTwo);
        setAudioTimeout(timeout);
      }, roundActiveAudioOne);
      setAudioTimeout(timeout);
    } else if (gameStage === 'roundStart') {
      // Play buzz on round end transition back to round start
      clearAudio();
      const buzz = new Audio('./audio/buzz.mp3');
      buzz.play();
    } else if (gameStage === 'gameEnd') {
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
  if (gameStage === 'roundStart') return <Redirect to="/round-start" />;
  if (gameStage === 'gameEnd') return <Redirect to="/game-end" />;
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
