import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import Setup from '../components/Setup';

function SetupContainer() {
  const connected = useSelector((state) => state.connected);
  const category = useSelector((state) => state.category);
  const categoryList = ['EVERYTHING', 'SCIENCE', 'PEOPLE', 'HISTORY']; // update after creating in postgres
  const gameCode = useSelector((state) => state.gameCode);
  const gameStage = useSelector((state) => state.gameStage);
  const minPlayers = 2;
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const skipList = ['0', '1', '2', '3', 'Unlimited'];
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => dispatch(actions.setCategory(event.target.value));
  const handlePlayerTeamChange = (event) => dispatch(actions.changePlayerTeam(event.target.textContent));
  const handleSkipsAllowedChange = (event) => dispatch(actions.setSkipsAllowed(event.target.value));
  const handleStartGame = () => {
    const teamOneLen = teamOne.length;
    const teamTwoLen = teamTwo.length;

    // Check if minimum number of players is met
    if (teamOneLen + teamTwoLen < minPlayers) {
      console.log(`Must have ${minPlayers} or more players`);
      return;
    }

    // Check if teams have same number of players
    if (teamOneLen !== teamTwoLen) {
      console.log('Teams must have the same number of players');
      return;
    }

    dispatch(actions.startGame());
  };

  if (!connected) return <Redirect to="/" />;
  if (gameStage === 'roundStart') return <Redirect to="/round-start" />;
  return (
    <Setup
      category={category}
      categoryList={categoryList}
      gameCode={gameCode}
      handleCategoryChange={handleCategoryChange}
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
