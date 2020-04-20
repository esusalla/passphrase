const crypto = require('crypto');

class Game {
  constructor() {
    this.gameStage = 'setup';
    this.gameCode = crypto.randomBytes(20).toString('hex').substring(0, 4).toUpperCase();

    // Rules
    this.timerMin = 52000;
    this.timerMax = 60000;
    this.minPlayers = 4;
    this.scoreGoal = 7;
    this.category = 'EVERYTHING';
    this.skipsAllowed = 2;

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
    this.wordList = [];
    this.currentWord = '';
    this.lastWord = '';
    this.seenWords = new Set();
  }

  addPlayer(player) {
    // Check if game is not currently in progress
    if (this.gameStage !== 'setup') return false;

    // Check if a player with this name already exists in the game
    if (this.players.has(player.name)) return false;

    // If new room without host, creator becomes the host
    if (!this.host) this.host = player;

    this.players.set(player.name, player);
    if (this.teamOne.length <= this.teamTwo.length) this.teamOne.push(player.name);
    else this.teamTwo.push(player.name);
    return true;
  }

  startGame() {
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

    // Set allowed skips for all players
    for (const player of this.players.values()) {
      player.skipsAvailable = this.skipsAllowed;
    }

    this.gameStage = 'roundStart';
    this.playerOrder = genPlayerOrder(this.teamOne, this.teamTwo);
    // TODO: get word from DB based on category setting, make sure none are in seenWords
    this.wordList = ['shoelace', 'iron', 'library', 'uncle', 'sister', 'notebook', 'outer space', 'brake', 'shark', 'money', 'strong', 'tunnel', 'telephone', 'fix', 'study', 'long', 'purse', 'mop', 'wave', 'beach', 'markers', 'bank', 'nice', 'knee', 'cough', 'big', 'pencil', 'field trip', 'black', 'mailman', 'wedding', 'mascot', 'radio', 'hello', 'toothbrush', 'pig', 'shout', 'sleep', 'empty', 'video camera', 'dinner', 'ankle', 'broccoli', 'vacation', 'pajamas', 'juice', 'hungry', 'chew', 'moon', 'storm', 'pail', 'dump truck', 'guitar', 'animal', 'fan', 'play', 'kick', 'athlete', 'forehead', 'computer', 'scooter', 'claw', 'antlers', 'young', 'shopping', 'magic', 'horn', 'silly', 'rhyme', 'fountain', 'prince', 'pen', 'crib', 'coat', 'violin', 'stick', 'taxi', 'red', 'melt', 'bag', 'glasses', 'boo', 'jewelry', 'car', 'dirty', 'fall', 'swimming pool', 'gift', 'tractor', 'dress', 'state', 'country', 'hail', 'mouth', 'brother', 'makeup', 'house', 'hot', 'lullaby', 'fire hydrant', 'dog', 'chicken', 'ear', 'man', 'night', 'cat', 'new', 'fish', 'mountain', 'aunt', 'happy', 'roller coaster', 'football', 'cafeteria', 'cowboy', 'cousin', 'paint', 'buy', 'nose', 'type', 'body', 'zoo', 'monster', 'hide-and-seek', 'weak', 'artist', 'diamond', 'dishwasher', 'high', 'jelly', 'stomach', 'peas', 'ladybug', 'yellow', 'spoon', 'fox', 'hair', 'dad', 'bird', 'birthday', 'water', 'dream', 'hotel', 'stapler', 'stump', 'cloud', 'nap', 'puppy', 'elephant', 'asleep', 'TV', 'desk', 'wind', 'school', 'wall', 'calculator', 'ballet', 'finger', 'Christmas', 'journal', 'laugh', 'seashell', 'candy', 'tuba', 'talk', 'heavy', 'trash can', 'scientist', 'shirt', 'cold', 'neighbor', 'plank', 'piano', 'clap', 'kite', 'boat', 'box', 'bark', 'grin', 'quarter', 'pants', 'mall', 'toe', 'nurse', 'escalator', 'train', 'shoe', 'go', 'salt', 'tissue', 'rainbow', 'ring', 'actor', 'grandma'];
    return true;
  }

  randomizeTeams() {
    const newOrder = shuffle(this.teamOne.concat(this.teamTwo));
    this.teamOne = newOrder.slice(0, Math.ceil(newOrder.length / 2));
    this.teamTwo = newOrder.slice(Math.ceil(newOrder.length / 2));
  }

  startRound() {
    this.gameStage = 'roundActive';
    this.currentWord = this.wordList.shift();
    this.seenWords.add(this.currentWord);
    this.timer = randomFromInterval(this.timerMin, this.timerMax);
    setTimeout(() => this.endRound(), this.timer);
  }

  getActivePlayer() {
    return this.players.get(this.playerOrder[0]);
  }

  passToNextPlayer() {
    this.lastWord = this.currentWord;
    this.currentWord = this.wordList.shift();
    this.seenWords.add(this.currentWord);
    this.getActivePlayer().skipsAvailable = this.skipsAllowed;
    this.playerOrder.push(this.playerOrder.shift());
  }

  skipWord() {
    this.currentWord = this.wordList.shift();
    this.seenWords.add(this.currentWord);
  }

  endRound() {
    if (this.teamOne.includes(this.playerOrder[0])) {
      this.teamTwoScore++;
    } else {
      this.teamOneScore++;
    }

    // End game if either team has reached the score goal
    if (this.teamOneScore === this.scoreGoal || this.teamTwoScore === this.scoreGoal) {
      this.endGame();
      return;
    }

    this.gameStage = 'roundStart';
    this.playerOrder.push(this.playerOrder.shift());

    // Reset available skips and send updated player order and score to all players
    for (const player of this.players.values()) {
      player.skipsAvailable = this.skipsAllowed;
      player.send(JSON.stringify({ type: 'UPDATE_AFTER_ROUND_END', gameStage: this.gameStage, playerOrder: this.playerOrder, skipsAllowed: this.skipsAllowed, teamOneScore: this.teamOneScore, teamTwoScore: this.teamTwoScore }));
    }
  }

  endGame() {
    this.gameStage = 'end';

    // Send updated game stage and scores to all players
    for (const player of this.players.values()) {
      player.send(JSON.stringify({ type: 'UPDATE_AFTER_GAME_END', gameStage: this.gameStage, teamOneScore: this.teamOneScore, teamTwoScore: this.teamTwoScore }));
    }
  }

  restart() {
    this.gameStage = 'setup';
    this.timer = 0;
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
    this.lastWord = '';
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function genPlayerOrder(teamOne, teamTwo) {
  const shuffledTeamOne = shuffle(teamOne.slice());
  const shuffledTeamTwo = shuffle(teamTwo.slice());
  const playerOrder = [];
  if (Math.round(Math.random() * 1)) {
    for (const [i, v] of shuffledTeamOne.entries()) {
      playerOrder.push(v);
      playerOrder.push(shuffledTeamTwo[i]);
    }
  } else {
    for (const [i, v] of shuffledTeamTwo.entries()) {
      playerOrder.push(v);
      playerOrder.push(shuffledTeamOne[i]);
    }
  }
  return playerOrder;
}

function randomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Game;
