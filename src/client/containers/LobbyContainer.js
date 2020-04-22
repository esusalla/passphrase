import React from 'react';
import { useSelector } from 'react-redux';

import Lobby from '../components/Lobby';

function LobbyContainer() {
  // Global state
  const category = useSelector(state => state.category);
  const gameCode = useSelector(state => state.gameCode);
  const hostName = useSelector(state => state.hostName);
  const skipsAllowed = useSelector(state => state.skipsAllowed);
  const teamOne = useSelector(state => state.teamOne);
  const teamTwo = useSelector(state => state.teamTwo);

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
