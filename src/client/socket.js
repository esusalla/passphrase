import { CONNECT_SOCKET, setConnected, updateFromServerState } from '../shared/actions';

function socket() {
	let socket = null;

	const onOpen = (store) => () => store.dispatch(setConnected(true));

	const onMessage = (store) => (msg) => {
		const state = JSON.parse(msg.data);
		// If initial create or join that includes UUID, save to session storage for reconnects
		if (state.uuid) {
			sessionStorage.setItem('uuid', state.uuid);
			sessionStorage.setItem('name', state.name);
			sessionStorage.setItem('gameCode', state.gameCode);
		}
		store.dispatch(updateFromServerState(state));
	};

	const onClose = (store) => () => store.dispatch(setConnected(false));

	return (store) => (next) => (action) => {
		if (action.type === CONNECT_SOCKET) {
			if (socket !== null) socket.close();
			socket = new WebSocket(action.url);
			socket.onopen = onOpen(store);
			socket.onmessage = onMessage(store);
			socket.onclose = onClose(store);
		} else {
			socket.send(JSON.stringify(action));
		}
		next(action);
	};
}

export default socket();
