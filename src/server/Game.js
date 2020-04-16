const crypto = require('crypto');

class Game {
  constructor() {
    this.gameCode = crypto.randomBytes(20).toString('hex').substring(0, 4).toUpperCase();

    // Rules
    this.minPlayers = 4;
    this.scoreGoal = 7;
    this.allowedSkips = 2;

    // Players and teams
    this.host = null;
    this.players = new Map();
    this.teamOne = [];
    this.teamTwo = [];
    this.playerOrder = [];

    // Play state
    this.timer = 0;
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
    this.currentSkips = 0;
    this.lastWord = '';
    this.seenWords = new Set();
  }

  addPlayer(player) {
    // Check if a player with this name already exists in the game
    if (this.players.has(player.name)) return false;

    // If new room without host, creator becomes the host
    if (!this.host) this.host = player;

    this.players.set(player.name, player);
    if (this.teamOne.length <= this.teamTwo.length) this.teamOne.push(player.name);
    else this.teamTwo.push(player.name);
    return true;
  }

  start() {
    const teamOneLen = this.teamOne.length;
    const teamTwoLen = this.teamTwo.length;

    // Check if minimum number of players is met
    if (teamOneLen + teamTwoLen < this.minPlayers) {
      console.log(`Must have ${this.minPlayers} or more players`);
      return false;
    }

    // Check if teams have same number of players
    if (teamOneLen !== teamTwoLen) {
      console.log('Teams must have the same number of players');
      return false;
    }

    return true;
  }

  reset() {
    this.timer = 0;
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
    this.currentSkips = 0;
    this.lastWord = '';
  }
}

export default Game;
