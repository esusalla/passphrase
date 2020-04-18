import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Lobby from '../components/Lobby';

function LobbyContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const gameStage = useSelector((state) => state.gameStage);
  const hostName = useSelector((state) => state.hostName);
  const category = useSelector((state) => state.category);
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'roundStart') return <Redirect to="/round-start" />;
  return (
    <Lobby
      category={category}
      gameCode={gameCode}
      hostName={hostName}
      skipsAllowed={skipsAllowed}
      teamOne={teamOne}
      teamTwo={teamTwo}
    />
  );
}

export default LobbyContainer;
