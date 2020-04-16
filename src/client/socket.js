import { batch } from 'react-redux';

import * as actions from './actions';

function socket() {
  let socket = null;

  const onOpen = (store) => () => {
    store.dispatch(actions.setConnected(true));
  };

  const onClose = (store) => () => {
    store.dispatch(actions.setConnected(false));
  };

  const onMessage = (store) => (msg) => {
    const data = JSON.parse(msg.data);
    switch (data.type) {
      case actions.INIT_AFTER_JOIN:
        batch(() => {
          store.dispatch(actions.setName(data.name));
          store.dispatch(actions.setGameCode(data.gameCode));
          store.dispatch(actions.setHostName(data.hostName));
          store.dispatch(actions.setTeams(data.teamOne, data.teamTwo));
        });
        break;
      case actions.INIT_AFTER_CREATE:
        batch(() => {
          store.dispatch(actions.setName(data.name));
          store.dispatch(actions.setGameCode(data.gameCode));
          store.dispatch(actions.setHostName(data.name));
          store.dispatch(actions.setTeams([data.name], []));
        });
        break;
      case actions.SET_TEAMS:
        store.dispatch(actions.setTeams(data.teamOne, data.teamTwo));
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
      default:
        next(action);
    }
  };
}

export default socket();
