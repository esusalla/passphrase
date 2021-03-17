import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { changePlayerTeam, randomizeTeams, setCategory, setSkipsAllowed, startGame } from "../../shared/actions";
import { categoryList, gameStages, minPlayers, skipList } from "../../shared/constants";
import Setup from "../components/Setup";

function SetupContainer() {
  // Global state
  const category = useSelector((state) => state.category);
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const gameStage = useSelector((state) => state.gameStage);
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);

  // Global state changes
  const dispatch = useDispatch();
  const handleCategoryChange = (event) => dispatch(setCategory(event.target.value));
  const handlePlayerTeamChange = (event) => {
    const parent = event.target.parentElement;
    dispatch(changePlayerTeam(parent.getAttribute("value")));
  };
  const handleRandomizeTeams = () => dispatch(randomizeTeams());
  const handleSkipsAllowedChange = (event) => dispatch(setSkipsAllowed(event.target.value));
  const handleStartGame = () => {
    const teamOneLen = teamOne.length;
    const teamTwoLen = teamTwo.length;

    // Check if minimum number of players is met
    if (teamOneLen + teamTwoLen < minPlayers) {
      // TODO: add error msg support
      return;
    }

    // Check if teams have same number of players
    if (teamOneLen !== teamTwoLen) {
      // TODO: add error msg support
      return;
    }

    dispatch(startGame());
  };

  if (!connected) return <Redirect to="/" />;
  if (gameStage === gameStages.ROUND_START) return <Redirect to="/round-start" />;
  return (
    <Setup
      category={category}
      categoryList={categoryList}
      gameCode={gameCode}
      handleCategoryChange={handleCategoryChange}
      handleRandomizeTeams={handleRandomizeTeams}
      handleSkipsAllowedChange={handleSkipsAllowedChange}
      handlePlayerTeamChange={handlePlayerTeamChange}
      handleStartGame={handleStartGame}
      skipsAllowed={skipsAllowed}
      skipList={skipList}
      teamOne={teamOne}
      teamTwo={teamTwo}
    />
  );
}

export default SetupContainer;
