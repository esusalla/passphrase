import * as actions from './actions';

const initialState = {
  connected: false,
  name: '',
  gameCode: '',
  hostName: '',
  teamOne: [],
  teamTwo: [],
  playerOrder: [],
  teamOneScore: 0,
  teamTwoScore: 0,
  lastWord: '',
  skipsLeft: 0,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CONNECTED:
      return { ...state, connected: action.connected };
    case actions.SET_NAME:
      return { ...state, name: action.name };
    case actions.SET_GAME_CODE:
      return { ...state, gameCode: action.gameCode };
    case actions.SET_HOST_NAME:
      return { ...state, hostName: action.hostName };
    case actions.SET_TEAMS:
      return { ...state, teamOne: action.teamOne, teamTwo: action.teamTwo };
    default:
      return state;
  }
}

export default reducers;
