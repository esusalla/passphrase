import {
  defaultCategory,
  defaultSkipsAllowed,
  gameStages,
  minPlayers,
  roundTimerMax,
  roundTimerMin,
  scoreGoal } from '../shared/constants';
import { genPlayerOrder, genRandomString, randomFromInterval, shuffle } from './utils';
import wordLists from './wordLists';

class Game {
  constructor(player) {
    this.gameCode = genRandomString(4);
    this.gameStage = gameStages.SETUP;

    // Rules
    this.category = defaultCategory;
    this.minPlayers = minPlayers;
    this.scoreGoal = scoreGoal;
    this.skipsAllowed = defaultSkipsAllowed;
    this.timerMin = roundTimerMin;
    this.timerMax = roundTimerMax;

    // Players and teams
    this.host = player;
    this.playerOrder = [];
    this.players = new Map([[player.name, player]]);
    this.teamOne = [player.name];
    this.teamTwo = [];

    // Play state
    this.currentWord = '';
    this.lastWord = '';
    this.roundStartTime = 0;
    this.seenWords = new Set();
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
  }

  addPlayer(player) {
    // Check if game is currently in progress
    if (this.gameStage !== gameStages.SETUP) return { error: 'Game is currently in progress' };

    // Check if a player with this name already exists in the game
    if (this.players.has(player.name)) return { error: 'Player with this name already exists' };

    this.players.set(player.name, player);
    if (this.teamOne.length <= this.teamTwo.length) this.teamOne.push(player.name);
    else this.teamTwo.push(player.name);
    return {};
  }

  reconnectPlayer(player) {
    // Check if player with this name and UUID exists in game
    if (this.players.has(player.name) && this.players.get(player.name).uuid === player.uuid) {
      // Preserve skips available for players reconnecting during their turn
      player.skipsAvailable = this.players.get(player.name).skipsAvailable;

      // Replace game host reference if it's the host reconnecting
      if (this.host.uuid === player.uuid) this.host = player;
      this.players.set(player.name, player);
      return true;
    }
    return false;
  }

  changePlayerTeam(name) {
    if (this.teamOne.includes(name)) {
      this.teamOne.splice(this.teamOne.indexOf(name), 1);
      this.teamTwo.push(name);
    } else if (this.teamTwo.includes(name)) {
      this.teamTwo.splice(this.teamTwo.indexOf(name), 1);
      this.teamOne.push(name);
    }
  }

  randomizeTeams() {
    const newOrder = shuffle(this.teamOne.concat(this.teamTwo));
    this.teamOne = newOrder.slice(0, Math.ceil(newOrder.length / 2));
    this.teamTwo = newOrder.slice(Math.ceil(newOrder.length / 2));
  }

  startGame() {
    const teamOneLen = this.teamOne.length;
    const teamTwoLen = this.teamTwo.length;

    // Check if minimum number of players is met
    if (teamOneLen + teamTwoLen < this.minPlayers) return false;

    // Check if teams have same number of players
    if (teamOneLen !== teamTwoLen) return false;

    // Set available skips for all players
    for (const player of this.players.values()) {
      player.skipsAvailable = this.skipsAllowed;
    }

    this.gameStage = gameStages.ROUND_START;
    this.playerOrder = genPlayerOrder(this.teamOne, this.teamTwo);
    return true;
  }

  startRound() {
    this.currentWord = this.getNextWord();
    this.gameStage = gameStages.ROUND_ACTIVE;
    this.getActivePlayer().skipsAvailable = this.skipsAllowed;
    this.lastWord = '';
    this.seenWords.add(this.currentWord);
    this.roundStartTime = new Date().getTime();

    const timer = randomFromInterval(this.timerMin, this.timerMax);
    setTimeout(() => this.endRound(), timer);
  }

  getActivePlayer() {
    return this.players.get(this.playerOrder[0]);
  }

  getNextWord() {
    const wordList = wordLists.get(this.category);

    // Iterate until word that has not been seen within this game is chosen
    let word = wordList[randomFromInterval(0, wordList.length)];
    while (this.seenWords.has(word) && this.seenWords.length < wordList.length) {
      word = wordList[randomFromInterval(0, wordList.length)];
    }

    // If all words in word list have been seen, clear seen words and start using duplicates
    if (this.seenWords.length === wordList.length) {
      this.seenWords.clear();
      word = wordList[randomFromInterval(0, wordList.length)];
    }

    this.seenWords.add(this.currentWord);
    return word;
  }

  passToNextPlayer() {
    this.lastWord = this.currentWord;
    this.currentWord = this.getNextWord();
    this.playerOrder.push(this.playerOrder.shift());

    // Reset available skips for new active player
    this.getActivePlayer().skipsAvailable = this.skipsAllowed;
  }

  skipWord() {
    const activePlayer = this.getActivePlayer();
    if (activePlayer.skipsAvailable === 'Unlimited' || activePlayer.skipsAvailable > 0) {
      // If skips are not unlimited, reduce by one
      if (activePlayer.skipsAvailable !== 'Unlimited') activePlayer.skipsAvailable -= 1;
      this.currentWord = this.getNextWord();
      return true;
    }
    return false;
  }

  endRound() {
    if (this.teamOne.includes(this.playerOrder[0])) this.teamTwoScore += 1;
    else this.teamOneScore += 1;

    // End game if either team has reached the score goal
    if (this.teamOneScore === this.scoreGoal || this.teamTwoScore === this.scoreGoal) {
      this.endGame();
      return;
    }

    this.gameStage = gameStages.ROUND_START;
    this.playerOrder.push(this.playerOrder.shift());

    // Send updated game stage, player order, and scores to all players
    // Clear elapsed round time, used for syncing audio with any player that reconnects mid-round
    for (const player of this.players.values()) {
      player.send(JSON.stringify({
        gameStage: this.gameStage,
        playerOrder: this.playerOrder,
        teamOneScore: this.teamOneScore,
        teamTwoScore: this.teamTwoScore,
      }));
    }
  }

  endGame() {
    this.gameStage = gameStages.GAME_END;

    // Send updated game stage and scores to all players
    for (const player of this.players.values()) {
      player.send(JSON.stringify({
        gameStage: this.gameStage,
        teamOneScore: this.teamOneScore,
        teamTwoScore: this.teamTwoScore,
      }));
    }
  }

  restart() {
    this.currentWord = '';
    this.gameStage = gameStages.SETUP;
    this.lastWord = '';
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
  }
}

export default Game;
