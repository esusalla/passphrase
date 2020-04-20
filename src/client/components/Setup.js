import PropTypes from 'prop-types';
import React from 'react';

function Setup(props) {
  const { category, categoryList, gameCode, handleCategoryChange, handlePlayerTeamChange, handleRandomizeTeams, handleSkipsAllowedChange, handleStartGame, skipsAllowed, skipList, teamOne, teamTwo } = props;
  const categoryOptions = categoryList.map((category) => <option key={category} value={category}>{category}</option>);
  const skipOptions = skipList.map((skip) => <option key={skip} value={skip}>{skip}</option>);
  const teamOneList = teamOne.map((playerName) => <li key={playerName} onClick={handlePlayerTeamChange}>{playerName}</li>);
  const teamTwoList = teamTwo.map((playerName) => <li key={playerName} onClick={handlePlayerTeamChange}>{playerName}</li>);

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
      <button onClick={handleRandomizeTeams} type="submit">Randomize Teams</button>
      <h5>Team Two</h5>
      <ul>{teamTwoList}</ul>
      <button onClick={handleStartGame} type="submit">Start Game</button>
    </div>
  );
}

Setup.propTypes = {
  category: PropTypes.string,
  categoryList: PropTypes.arrayOf(PropTypes.string),
  gameCode: PropTypes.string,
  handleCategoryChange: PropTypes.func,
  handleRandomizeTeams: PropTypes.func,
  handlePlayerTeamChange: PropTypes.func,
  handleSkipsAllowedChange: PropTypes.func,
  handleStartGame: PropTypes.func,
  skipsAllowed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  skipList: PropTypes.arrayOf(PropTypes.string),
  teamOne: PropTypes.arrayOf(PropTypes.string),
  teamTwo: PropTypes.arrayOf(PropTypes.string),
};
export default Setup;
