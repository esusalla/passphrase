export const SET_CONNECTED = 'SET_CONNECTED';
export const SET_NAME = 'SET_NAME';
export const SET_GAME_CODE = 'SET_GAME_CODE';
export const SET_HOST_NAME = 'SET_HOST_NAME';
export const SET_TEAMS = 'SET_TEAMS';

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

export function setTeams(teamOne, teamTwo) {
  return { type: SET_TEAMS, teamOne, teamTwo };
}

// Socket middleware actions
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const INIT_AFTER_JOIN = 'INIT_AFTER_JOIN'; // Received from server after joining game
export const INIT_AFTER_CREATE = 'INIT_AFTER_CREATE'; // Received from server after creating game
