import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import GameEnd from '../components/GameEnd';

function GameEndContainer() {
  const connected = useSelector((state) => state.connected);
  const gameStage = useSelector((state) => state.gameStage);
  const teamOneScore = useSelector((state) => state.teamOneScore);
  const teamTwoScore = useSelector((state) => state.teamTwoScore);
  const dispatch = useDispatch();

  const handleRestartGame = () => {
    // Send everyone to lobby and host to setup
  };

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'setup') return <Redirect to="/setup" />;
  return (
    <GameEnd
      handleRestartGame={handleRestartGame}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default GameEndContainer;
