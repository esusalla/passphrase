import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { restartGame } from "../../shared/actions";
import { gameStages } from "../../shared/constants";
import GameEnd from "../components/GameEnd";

function GameEndContainer() {
  // Global state
  const connected = useSelector((state) => state.connected);
  const gameStage = useSelector((state) => state.gameStage);
  const hostName = useSelector((state) => state.hostName);
  const name = useSelector((state) => state.name);
  const teamOneScore = useSelector((state) => state.teamOneScore);
  const teamTwoScore = useSelector((state) => state.teamTwoScore);

  // Global state changes
  const dispatch = useDispatch();
  const handleRestartGame = () => dispatch(restartGame());

  if (!connected) return <Redirect to="/" />;
  if (gameStage === gameStages.SETUP) return <Redirect to="/setup" />;
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
