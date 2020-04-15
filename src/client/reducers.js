import { SET_CONNECTED, INIT_AFTER_JOIN, INIT_AFTER_CREATE, SET_TEAMS } from './actions';

const initialState = {
  connected: false,
  name: '',
  gameCode: '',
  hostName: '',
  playerOrder: [],
  teamOne: [],
  teamTwo: [],
  teamOneScore: 0,
  teamTwoScore: 0,
  lastWord: '',
  skipsLeft: 0,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_CONNECTED:
      return { ...state, connected: action.connected };
    case INIT_AFTER_JOIN:
      return { ...state, name: action.name, gameCode: action.gameCode, hostName: action.hostName, teamOne: action.teamOne, teamTwo: action.teamTwo };
    case INIT_AFTER_CREATE:
      return { ...state, name: action.name, gameCode: action.gameCode, hostName: action.name, teamOne: action.teamOne };
    case SET_TEAMS:
      return { ...state, teamOne: action.teamOne, teamTwo: action.teamTwo };
    default:
      return state;
  }
}

export default reducers;
