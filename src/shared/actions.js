// Handled by client
export const CONNECT_SOCKET = 'CONNECT_SOCKET'; // Handled by socket middleware
export const SET_CONNECTED = 'SET_CONNECTED';
export const UPDATE_FROM_SERVER_STATE = 'UPDATE_FROM_SERVER_STATE';

export const connectSocket = (url) => (({ type: CONNECT_SOCKET, url }));
export const setConnected = (connected) => ({ type: SET_CONNECTED, connected });
export const updateFromServerState = (state) => ({ type: UPDATE_FROM_SERVER_STATE, state });

// Handled by both (first on client for responsiveness then synced with server for other players)
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SKIPS_ALLOWED = 'SET_SKIPS_ALLOWED';
export const CHANGE_PLAYER_TEAM = 'CHANGE_PLAYER_TEAM';
export const USE_SKIP = 'USE_SKIP';

export const setCategory = (category) => ({ type: SET_CATEGORY, category });
export const setSkipsAllowed = (skipsAllowed) => ({ type: SET_SKIPS_ALLOWED, skipsAllowed });
export const changePlayerTeam = (name) => ({ type: CHANGE_PLAYER_TEAM, name });
export const useSkip = () => ({ type: USE_SKIP });

// Handled by server
export const RANDOMIZE_TEAMS = 'RANDOMIZE_TEAMS';
export const START_GAME = 'START_GAME';
export const START_ROUND = 'START_ROUND';
export const PASS_TO_NEXT_PLAYER = 'PASS_TO_NEXT_PLAYER';
export const RESTART_GAME = 'RESTART_GAME';

export const randomizeTeams = () => ({ type: RANDOMIZE_TEAMS });
export const startGame = () => ({ type: START_GAME });
export const startRound = () => ({ type: START_ROUND });
export const passToNextPlayer = () => ({ type: PASS_TO_NEXT_PLAYER });
export const restartGame = () => ({ type: RESTART_GAME });
