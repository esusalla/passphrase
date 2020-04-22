import React, { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import { roundActiveAudioOne, roundActiveAudioTwo } from '../../shared/constants';
import * as actions from '../actions';
import RoundActive from '../components/RoundActive';

function RoundActiveContainer() {
  // Global state
  const currentWord = useSelector(state => state.currentWord);
  const gameStage = useSelector(state => state.gameStage);
  const lastWord = useSelector(state => state.lastWord);
  const name = useSelector(state => state.name);
  const playerOrder = useSelector(state => state.playerOrder);
  const skipsAllowed = useSelector(state => state.skipsAllowed);
  const skipsAvailable = useSelector(state => state.skipsAvailable);
  const teamOneScore = useSelector(state => state.teamOneScore);
  const teamTwoScore = useSelector(state => state.teamTwoScore);

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
    dispatch(actions.setAudio(newAudio));
    return newAudio;
  };

  useEffect(() => {
    // Play increasingly faster tick tocks as round progresses
    let tickTock = loopAudio('./audio/tick-tock-1.mp3');
    let timeout = setTimeout(() => {
      tickTock.pause();
      tickTock = loopAudio('./audio/tick-tock-2.mp3');
      timeout = setTimeout(() => {
        tickTock.pause();
        tickTock = loopAudio('./audio/tick-tock-3.mp3');
      }, roundActiveAudioTwo);
      dispatch(actions.setAudioTimeout(timeout));
    }, roundActiveAudioOne);
    dispatch(actions.setAudioTimeout(timeout));
  }, [gameStage]);

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
