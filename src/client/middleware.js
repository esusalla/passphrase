import { CONNECT_SOCKET, INIT_AFTER_JOIN, INIT_AFTER_CREATE, SET_TEAMS, setConnected, initAfterCreate, initAfterJoin, setTeams } from './actions';

function middleware() {
  let socket = null;

  const onOpen = (store) => () => {
    store.dispatch(setConnected(true));
  };

  const onClose = (store) => () => {
    store.dispatch(setConnected(false));
  };

  const onMessage = (store) => (msg) => {
    const data = JSON.parse(msg.data);
    switch (data.type) {
      case INIT_AFTER_JOIN:
        store.dispatch(initAfterJoin(data.name, data.gameCode, data.hostName, data.teamOne, data.teamTwo));
        break;
      case INIT_AFTER_CREATE:
        store.dispatch(initAfterCreate(data.name, data.gameCode, data.teamOne));
        break;
      case SET_TEAMS:
        store.dispatch(setTeams(data.teamOne, data.teamTwo));
        break;
      default:
        break;
    }
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case CONNECT_SOCKET: {
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

export default middleware();
