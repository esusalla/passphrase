import React, { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import RoundActive from '../components/RoundActive';

function RoundActiveContainer() {
  const connected = useSelector((state) => state.connected);
  const currentWord = useSelector((state) => state.currentWord);
  const gameStage = useSelector((state) => state.gameStage);
  const lastWord = useSelector((state) => state.lastWord);
  const name = useSelector((state) => state.name);
  const playerOrder = useSelector((state) => state.playerOrder);
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const skipsAvailable = useSelector((state) => state.skipsAvailable);
  const teamOneScore = useSelector((state) => state.teamOneScore);
  const teamTwoScore = useSelector((state) => state.teamTwoScore);
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio());
  const [audioTimeout, setAudioTimeout] = useState(null);

  useEffect(() => {
    if (!connected) {
      audio.pause();
      clearTimeout(audioTimeout);
    }
    if (gameStage === 'roundStart') {
      audio.pause();
      const roundEnd = new Audio('./audio/round-end.mp3');
      roundEnd.play();
    } else if (gameStage === 'end') {
      audio.pause();
    } else if (gameStage === 'roundActive') {
      let tickTock = new Audio('./audio/tick-tock-1.mp3');
      tickTock.loop = true;
      tickTock.play();
      setAudio(tickTock);
      let timeout = setTimeout(() => {
        tickTock.pause();
        tickTock = new Audio('./audio/tick-tock-2.mp3');
        tickTock.loop = true;
        tickTock.play();
        setAudio(tickTock);
        timeout = setTimeout(() => {
          tickTock.pause();
          tickTock = new Audio('./audio/tick-tock-3.mp3');
          tickTock.loop = true;
          tickTock.play();
          setAudio(tickTock);
        }, 15000);
        setAudioTimeout(timeout);
      }, 29000);
      setAudioTimeout(timeout);
    }
  }, [connected, gameStage]);

  const handleUseSkip = () => {
    if (skipsAvailable === 'Unlimited' || skipsAvailable > 0) {
      dispatch(actions.useSkip());
    }
  };

  const handlePassToNextPlayer = () => {
    batch(() => {
      dispatch(actions.passToNextPlayer());
      dispatch(actions.setSkipsAvailable(skipsAllowed));
      dispatch(actions.setCurrentWord(''));
    });
  };

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'roundStart') return <Redirect to="/round-start" />;
  if (gameStage === 'end') return <Redirect to="/end" />;
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
