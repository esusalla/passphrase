import { batch } from 'react-redux';

import * as actions from './actions';

function socket() {
  let socket = null;

  const onOpen = (store) => () => {
    store.dispatch(actions.setConnected(true));
  };

  const onClose = (store) => () => {
    batch(() => {
      store.dispatch(actions.setGameStage('setup'));
      store.dispatch(actions.setTeams([], []));
      store.dispatch(actions.setConnected(false));
    });
  };

  const onMessage = (store) => (msg) => {
    const data = JSON.parse(msg.data);
    switch (data.type) {
      case actions.INIT_AFTER_JOIN:
        batch(() => {
          store.dispatch(actions.setName(data.name));
          store.dispatch(actions.setHostName(data.hostName));
          store.dispatch(actions.setCategory(data.category));
          store.dispatch(actions.setSkipsAllowed(data.skipsAllowed));
          store.dispatch(actions.setTeams(data.teamOne, data.teamTwo));
          store.dispatch(actions.setGameCode(data.gameCode));
        });
        break;
      case actions.INIT_AFTER_CREATE:
        batch(() => {
          store.dispatch(actions.setName(data.name));
          store.dispatch(actions.setHostName(data.name));
          store.dispatch(actions.setTeams([data.name], []));
          store.dispatch(actions.setGameCode(data.gameCode));
        });
        break;
      case actions.INIT_AFTER_START:
        batch(() => {
          store.dispatch(actions.setSkipsAllowed(data.skipsAllowed));
          store.dispatch(actions.setPlayerOrder(data.playerOrder));
          store.dispatch(actions.setGameStage(data.gameStage));
        });
        break;
      case actions.SET_CATEGORY:
        store.dispatch(actions.setCategory(data.category));
        break;
      case actions.SET_SKIPS_ALLOWED:
        store.dispatch(actions.setSkipsAllowed(data.skipsAllowed));
        break;
      case actions.SET_TEAMS:
        store.dispatch(actions.setTeams(data.teamOne, data.teamTwo));
        break;
      case actions.SET_GAME_STAGE:
        store.dispatch(actions.setGameStage(data.gameStage));
        break;
      case actions.UPDATE_AFTER_ROUND_START:
        batch(() => {
          store.dispatch(actions.setLastWord(data.lastWord));
          store.dispatch(actions.setGameStage(data.gameStage));
        });
        break;
      case actions.SET_CURRENT_WORD:
        store.dispatch(actions.setCurrentWord(data.currentWord));
        break;
      case actions.UPDATE_AFTER_PASS:
        batch(() => {
          store.dispatch(actions.setLastWord(data.lastWord));
          store.dispatch(actions.setPlayerOrder(data.playerOrder));
        });
        break;
      case actions.UPDATE_AFTER_ROUND_END:
        batch(() => {
          store.dispatch(actions.setScores(data.teamOneScore, data.teamTwoScore));
          store.dispatch(actions.setSkipsAvailable(data.skipsAllowed));
          store.dispatch(actions.setPlayerOrder(data.playerOrder));
          store.dispatch(actions.setGameStage(data.gameStage));
        });
        break;
      case actions.UPDATE_AFTER_GAME_END:
        batch(() => {
          store.dispatch(actions.setScores(data.teamOneScore, data.teamTwoScore));
          store.dispatch(actions.setGameStage(data.gameStage));
        });
        break;
      default:
        break;
    }
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case actions.CONNECT_SOCKET: {
        if (socket !== null) {
          socket.close();
        }
        socket = new WebSocket(action.url);
        socket.onopen = onOpen(store);
        socket.onclose = onClose(store);
        socket.onmessage = onMessage(store);
        break;
      }
      // Messages passed back to server from client
      case actions.SET_CATEGORY:
      case actions.SET_SKIPS_ALLOWED:
      case actions.CHANGE_PLAYER_TEAM:
      case actions.START_GAME:
      case actions.START_ROUND:
      case actions.USE_SKIP:
      case actions.PASS_TO_NEXT_PLAYER:
        socket.send(JSON.stringify(action));
        next(action);
        break;
      default:
        next(action);
    }
  };
}

export default socket();
