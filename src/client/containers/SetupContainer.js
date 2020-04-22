import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { categoryList, minPlayers, skipList } from '../../shared/constants';
import * as actions from '../actions';
import Setup from '../components/Setup';

function SetupContainer() {
  // Global state
  const category = useSelector(state => state.category);
  const gameCode = useSelector(state => state.gameCode);
  const skipsAllowed = useSelector(state => state.skipsAllowed);
  const teamOne = useSelector(state => state.teamOne);
  const teamTwo = useSelector(state => state.teamTwo);

  // Global state changes
  const dispatch = useDispatch();
  const handleCategoryChange = event => dispatch(actions.setCategory(event.target.value));
  const handlePlayerTeamChange = event => {
    const parent = event.target.parentElement;
    dispatch(actions.changePlayerTeam(parent.getAttribute('value')));
  };
  const handleRandomizeTeams = () => dispatch(actions.randomizeTeams());
  const handleSkipsAllowedChange = event => dispatch(actions.setSkipsAllowed(event.target.value));
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
