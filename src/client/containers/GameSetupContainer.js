import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import GameSetup from '../components/GameSetup';

function GameSetupContainer() {
  const connected = useSelector((state) => state.connected);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  return <GameSetup teamOne={teamOne} teamTwo={teamTwo} />;
}

export default GameSetupContainer;
