import React from 'react';
import { useSelector } from 'react-redux';

import GameEndContainer from './GameEndContainer';
import HomeContainer from './HomeContainer';
import LobbyContainer from './LobbyContainer';
import RoundActiveContainer from './RoundActiveContainer';
import RoundStartContainer from './RoundStartContainer';
import SetupContainer from './SetupContainer';

function App() {
  // Global state
  const connected = useSelector(state => state.connected);
  const gameStage = useSelector(state => state.gameStage);
  const hostName = useSelector(state => state.hostName);
  const name = useSelector(state => state.name);

  if (!connected) return <HomeContainer />;
  if (gameStage === 'setup') {
    // Separate views depending on whether player is host or not
    if (name !== hostName) return <LobbyContainer />;
    return <SetupContainer />;
  }
  if (gameStage === 'roundStart') return <RoundStartContainer />;
  if (gameStage === 'roundActive') return <RoundActiveContainer />;
  if (gameStage === 'gameEnd') return <GameEndContainer />;
}

export default App;
