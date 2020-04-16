import * as actions from './actions';

const initialState = {
  connected: false,
  name: '',
  gameCode: '',
  hostName: '',
  category: 'EVERYTHING',
  skipsAllowed: '2',
  teamOne: [],
  teamTwo: [],
  playerOrder: [],
  teamOneScore: 0,
  teamTwoScore: 0,
  lastWord: '',
  skipsUsed: 0,
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
    case actions.SET_CATEGORY:
      return { ...state, category: action.category };
    case actions.SET_SKIPS_ALLOWED:
      return { ...state, skipsAllowed: action.skipsAllowed };
    case actions.SET_TEAMS:
      return { ...state, teamOne: action.teamOne, teamTwo: action.teamTwo };
    case actions.CHANGE_PLAYER_TEAM: {
      const updatedTeamOne = state.teamOne.slice();
      const updatedTeamTwo = state.teamTwo.slice();
      if (state.teamOne.includes(action.name)) {
        updatedTeamOne.splice(updatedTeamOne.indexOf(action.name), 1);
        updatedTeamTwo.push(action.name);
      } else if (state.teamTwo.includes(action.name)) {
        updatedTeamTwo.splice(updatedTeamTwo.indexOf(action.name), 1);
        updatedTeamOne.push(action.name);
      }
      return { ...state, teamOne: updatedTeamOne, teamTwo: updatedTeamTwo };
    }
    default:
      return state;
  }
}

export default reducers;
