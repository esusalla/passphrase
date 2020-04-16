import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions';
import Setup from '../components/Setup';

function SetupContainer() {
  const connected = useSelector((state) => state.connected);
  const gameCode = useSelector((state) => state.gameCode);
  const category = useSelector((state) => state.category);
  const categoryList = ['EVERYTHING', 'SCIENCE', 'PEOPLE', 'HISTORY']; // update after creating in postgres
  const skipsAllowed = useSelector((state) => state.skipsAllowed);
  const skipList = ['0', '1', '2', '3', 'Unlimited'];
  const teamOne = useSelector((state) => state.teamOne);
  const teamTwo = useSelector((state) => state.teamTwo);
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => dispatch(actions.setCategory(event.target.value));
  const handleSkipsAllowedChange = (event) => dispatch(actions.setSkipsAllowed(event.target.value));
  const handlePlayerTeamChange = (event) => dispatch(actions.changePlayerTeam(event.target.textContent));

  if (!connected) return <Redirect to="/" />;
  return (
    <Setup
      category={category}
      categoryList={categoryList}
      gameCode={gameCode}
      handleCategoryChange={handleCategoryChange}
      handleSkipsAllowedChange={handleSkipsAllowedChange}
      handlePlayerTeamChange={handlePlayerTeamChange}
      skipsAllowed={skipsAllowed}
      skipList={skipList}
      teamOne={teamOne}
      teamTwo={teamTwo}
    />
  );
}

export default SetupContainer;
