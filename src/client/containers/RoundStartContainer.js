import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import RoundStart from '../components/RoundStart';

function RoundStartContainer() {
  // Global state
  const connected = useSelector(state => state.connected);
  const gameStage = useSelector(state => state.gameStage);
  const name = useSelector(state => state.name);
  const playerOrder = useSelector(state => state.playerOrder);
  const teamOneScore = useSelector(state => state.teamOneScore);
  const teamTwoScore = useSelector(state => state.teamTwoScore);

  // Global state changes
  const dispatch = useDispatch();
  const handleStartRound = () => dispatch(actions.startRound());

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'roundActive') return <Redirect to="/round-active" />;
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
