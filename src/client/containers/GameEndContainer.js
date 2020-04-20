import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import GameEnd from '../components/GameEnd';

function GameEndContainer() {
  const connected = useSelector((state) => state.connected);
  const gameStage = useSelector((state) => state.gameStage);
  const hostName = useSelector((state) => state.hostName);
  const name = useSelector((state) => state.name);
  const teamOneScore = useSelector((state) => state.teamOneScore);
  const teamTwoScore = useSelector((state) => state.teamTwoScore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStage === 'end') {
      const audio = new Audio('./audio/game-end.mp3');
      audio.play();
    }
  }, [gameStage]);

  const handleRestartGame = () => {
    dispatch(actions.restartGame());
  };

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'setup' && name === hostName) return <Redirect to="/setup" />;
  if (gameStage === 'setup' && name !== hostName) return <Redirect to="/lobby" />;
  return (
    <GameEnd
      handleRestartGame={handleRestartGame}
      hostName={hostName}
      name={name}
      teamOneScore={teamOneScore}
      teamTwoScore={teamTwoScore}
    />
  );
}

export default GameEndContainer;
