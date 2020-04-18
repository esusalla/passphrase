import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import RoundActive from '../components/RoundActive';

function RoundActiveContainer() {
  const connected = useSelector((state) => state.connected);
  const currentWord = useSelector((state) => state.currentWord);
  const gameStage = useSelector((state) => state.gameStage);
  const name = useSelector((state) => state.name);
  const playerOrder = useSelector((state) => state.playerOrder);
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const skipsAvailable = useSelector((state) => state.skipsAvailable);
  const teamOneScore = useSelector((state) => state.teamOneScore);
  const teamTwoScore = useSelector((state) => state.teamTwoScore);
  const dispatch = useDispatch();

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
      name={name}
      playerOrder={playerOrder}
      skipsAvailable={skipsAvailable}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default RoundActiveContainer;
