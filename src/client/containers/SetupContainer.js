import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Setup from '../components/Setup';

function SetupContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  return <Setup gameCode={gameCode} teamOne={teamOne} teamTwo={teamTwo} />;
}

export default SetupContainer;
