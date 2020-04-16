import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Lobby from '../components/Lobby';

function LobbyContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const hostName = useSelector((state) => state.hostName);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  return <Lobby gameCode={gameCode} hostName={hostName} teamOne={teamOne} teamTwo={teamTwo} />;
}

export default LobbyContainer;
