import history from './history';

export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const SET_CONNECTED = 'SET_CONNECTED';
export const INIT_AFTER_JOIN = 'INIT_AFTER_JOIN';
export const INIT_AFTER_CREATE = 'INIT_AFTER_CREATE';
export const SET_TEAMS = 'SET_TEAMS';

export function connectSocket(url) {
  return { type: CONNECT_SOCKET, url };
}

export function setConnected(connected) {
  return { type: SET_CONNECTED, connected };
}

export function initAfterJoin(name, gameCode, hostName, teamOne, teamTwo) {
  history.push('/lobby');
  return { type: INIT_AFTER_JOIN, name, gameCode, hostName, teamOne, teamTwo };
}

export function initAfterCreate(name, gameCode, teamOne) {
  history.push('/setup');
  return { type: INIT_AFTER_CREATE, name, gameCode, teamOne };
}

export function setTeams(teamOne, teamTwo) {
  return { type: SET_TEAMS, teamOne, teamTwo };
}
