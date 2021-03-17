import * as actions from "../shared/actions";
import { gameStages } from "../shared/constants";

// State kept together to allow bulk updates of game state from server
const initialState = {
  // Initial connect state
  connected: false,
  gameCode: "",
  gameStage: gameStages.INIT,
  hostName: "",
  name: "",
  uuid: "",

  // Setup state
  category: "",
  playerOrder: [],
  skipsAllowed: "",
  teamOne: [],
  teamTwo: [],

  // Round state
  currentWord: "",
  elapsedRoundTime: 0,
  lastWord: "",
  skipsAvailable: "",
  teamOneScore: 0,
  teamTwoScore: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CONNECTED:
      // Reset game stage on disconnect
      if (!action.connected) return { ...state, connected: action.connected, gameStage: gameStages.INIT };
      return { ...state, connected: action.connected };

    case actions.UPDATE_FROM_SERVER_STATE:
      return { ...state, ...action.state };

    // Below actions are synced with server but also updated on client for responsiveness
    case actions.SET_CATEGORY:
      return { ...state, category: action.category };

    case actions.SET_SKIPS_ALLOWED:
      return { ...state, skipsAllowed: action.skipsAllowed };

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

    case actions.USE_SKIP:
      // If skips are not unlimited, reduce by one
      if (state.skipsAvailable !== "Unlimited") {
        const skipsAvailable = state.skipsAvailable - 1;
        return { ...state, skipsAvailable };
      }
      // Unlimited skips enabled so state is unchanged
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
