import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import GameLobby from '../components/GameLobby';

function GameLobbyContainer() {
  const connected = useSelector((state) => state.connected);
  const hostName = useSelector((state) => state.hostName);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  return <GameLobby hostName={hostName} teamOne={teamOne} teamTwo={teamTwo} />;
}

export default GameLobbyContainer;
