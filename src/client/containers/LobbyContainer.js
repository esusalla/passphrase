import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { gameStages } from '../../shared/constants';
import Lobby from '../components/Lobby';

function LobbyContainer() {
  // Global state
  const category = useSelector(state => state.category);
  const connected = useSelector(state => state.connected);
  const gameCode = useSelector(state => state.gameCode);
  const gameStage = useSelector(state => state.gameStage);
  const hostName = useSelector(state => state.hostName);
  const skipsAllowed = useSelector(state => state.skipsAllowed);
  const teamOne = useSelector(state => state.teamOne);
  const teamTwo = useSelector(state => state.teamTwo);

  if (!connected) return <Redirect to="/" />;
  if (gameStage === gameStages.ROUND_START) return <Redirect to="/round-start" />;
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
