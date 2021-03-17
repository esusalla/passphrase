import PropTypes from "prop-types";
import React from "react";

function Setup(props) {
  const {
    category,
    categoryList,
    gameCode,
    handleCategoryChange,
    handlePlayerTeamChange,
    handleRandomizeTeams,
    handleSkipsAllowedChange,
    handleStartGame,
    skipsAllowed,
    skipList,
    teamOne,
    teamTwo,
  } = props;
  const categoryOptions = categoryList.map((cat) => <option key={cat} value={cat}>{cat}</option>);
  const skipOptions = skipList.map((skip) => <option key={skip} value={skip}>{skip}</option>);
  const teamOneList = teamOne.map((playerName) => (
    <li key={playerName} value={playerName}>
      {playerName}<button type="button" onClick={handlePlayerTeamChange}>{' ==>'}</button>
    </li>
  ));
  const teamTwoList = teamTwo.map((playerName) => (
    <li key={playerName} value={playerName}>
      <button type="button" onClick={handlePlayerTeamChange}>{'<== '}</button>{playerName}
    </li>
  ));

  return (
    <div>
      <h2>{`SETUP (${gameCode})`}</h2>
      <label htmlFor="category">
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          {categoryOptions}
        </select>
      </label>
      <br />
      <label htmlFor="skipsAllowed">
        Skips allowed per turn:
        <select name="skipsAllowed" onChange={handleSkipsAllowedChange} value={skipsAllowed}>
          {skipOptions}
        </select>
      </label>
      <h5>Team One</h5>
      <ul>{teamOneList}</ul>
      <button onClick={handleRandomizeTeams} type="submit">RANDOMIZE TEAMS</button>
      <h5>Team Two</h5>
      <ul>{teamTwoList}</ul>
      <button onClick={handleStartGame} type="submit">START GAME</button>
    </div>
  );
}

Setup.propTypes = {
  category: PropTypes.string.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.string).isRequired,
  gameCode: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleRandomizeTeams: PropTypes.func.isRequired,
  handlePlayerTeamChange: PropTypes.func.isRequired,
  handleSkipsAllowedChange: PropTypes.func.isRequired,
  handleStartGame: PropTypes.func.isRequired,
  skipsAllowed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  skipList: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamOne: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamTwo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Setup;
