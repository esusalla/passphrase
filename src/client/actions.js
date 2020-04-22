export const SET_CONNECTED = 'SET_CONNECTED';
export const SET_NAME = 'SET_NAME';
export const SET_GAME_CODE = 'SET_GAME_CODE';
export const SET_HOST_NAME = 'SET_HOST_NAME';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SKIPS_ALLOWED = 'SET_SKIPS_ALLOWED';
export const SET_TEAMS = 'SET_TEAMS';
export const CHANGE_PLAYER_TEAM = 'CHANGE_PLAYER_TEAM';
export const RANDOMIZE_TEAMS = 'RANDOMIZE_TEAMS';
export const START_GAME = 'START_GAME';
export const SET_PLAYER_ORDER = 'SET_PLAYER_ORDER';
export const SET_GAME_STAGE = 'SET_GAME_STAGE';
export const START_ROUND = 'START_ROUND';
export const SET_CURRENT_WORD = 'SET_CURRENT_WORD';
export const SET_LAST_WORD = 'SET_LAST_WORD';
export const SET_SKIPS_AVAILABLE = 'SET_SKIPS_AVAILABLE';
export const USE_SKIP = 'USE_SKIP';
export const PASS_TO_NEXT_PLAYER = 'PASS_TO_NEXT_PLAYER';
export const SET_SCORES = 'SET_SCORES';
export const RESTART_GAME = 'RESTART_GAME';
export const SET_AUDIO = 'SET_AUDIO';
export const SET_AUDIO_TIMEOUT = 'SET_AUDIO_TIMEOUT';

export function setConnected(connected) {
  return { type: SET_CONNECTED, connected };
}

export function setName(name) {
  return { type: SET_NAME, name };
}

export function setGameCode(gameCode) {
  return { type: SET_GAME_CODE, gameCode };
}

export function setHostName(hostName) {
  return { type: SET_HOST_NAME, hostName };
}

export function setCategory(category) {
  return { type: SET_CATEGORY, category };
}

export function setSkipsAllowed(skipsAllowed) {
  return { type: SET_SKIPS_ALLOWED, skipsAllowed };
}

export function setTeams(teamOne, teamTwo) {
  return { type: SET_TEAMS, teamOne, teamTwo };
}

export function changePlayerTeam(name) {
  return { type: CHANGE_PLAYER_TEAM, name };
}

export function randomizeTeams() {
  return { type: RANDOMIZE_TEAMS };
}

export function startGame() {
  return { type: START_GAME };
}

export function setPlayerOrder(playerOrder) {
  return { type: SET_PLAYER_ORDER, playerOrder };
}

export function setGameStage(gameStage) {
  return { type: SET_GAME_STAGE, gameStage };
}

export function startRound() {
  return { type: START_ROUND };
}

export function setCurrentWord(currentWord) {
  return { type: SET_CURRENT_WORD, currentWord };
}

export function setLastWord(lastWord) {
  return { type: SET_LAST_WORD, lastWord };
}

export function setSkipsAvailable(skipsAvailable) {
  return { type: SET_SKIPS_AVAILABLE, skipsAvailable };
}

export function useSkip() {
  return { type: USE_SKIP };
}

export function passToNextPlayer() {
  return { type: PASS_TO_NEXT_PLAYER };
}

export function setScores(teamOneScore, teamTwoScore) {
  return { type: SET_SCORES, teamOneScore, teamTwoScore };
}

export function restartGame() {
  return { type: RESTART_GAME };
}

export function setAudio(audio) {
  return { type: SET_AUDIO, audio };
}

export function setAudioTimeout(audioTimeout) {
  return { type: SET_AUDIO_TIMEOUT, audioTimeout };
}

// Socket middleware actions
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const INIT_AFTER_JOIN = 'INIT_AFTER_JOIN'; // Received from server after joining game
export const INIT_AFTER_CREATE = 'INIT_AFTER_CREATE'; // Received from server after creating game
export const INIT_AFTER_RECONNECT = 'INIT_AFTER_RECONNECT'; // Received from server after player reconnects to game after being disconnected
export const INIT_AFTER_START = 'INIT_AFTER_START'; // Received from server after game is started
export const UPDATE_AFTER_ROUND_START = 'UPDATE_AFTER_ROUND_START'; // Received from server after start of round
export const UPDATE_AFTER_PASS = 'UPDATE_AFTER_PASS'; // Received from server after phrase is guessed and player passes to next
export const UPDATE_AFTER_ROUND_END = 'UPDATE_AFTER_ROUND_END'; // Received from server after end of round
export const UPDATE_AFTER_GAME_END = 'UPDATE_AFTER_GAME_END'; // Received from server after end of game
