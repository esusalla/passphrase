import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import WebSocket from 'ws';

import Game from './Game';

const games = new Map();
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  ws.id = uuidv4();
  ws.name = query.name;
  console.log(`New connection from ${ws.id} (${ws.name})`);

  if (pathname === '/join') {
    console.log(`${query.name} is joining game ${query.gameCode}`);

    const game = games.get(query.gameCode.toUpperCase());
    if (!game) {
      // send game doesn't exist error
      ws.close();
      return;
    }

    const added = game.addPlayer(ws);
    if (!added) {
      // send player already exists error
      ws.close();
      return;
    }

    ws.send(JSON.stringify({ type: 'INIT_AFTER_JOIN', name: query.name, gameCode: game.gameCode, hostName: game.host.name, teamOne: game.teamOne, teamTwo: game.teamTwo }));
    for (const [playerName, player] of game.players) {
      if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_TEAMS', teamOne: game.teamOne, teamTwo: game.teamTwo }));
    }
  } else if (pathname === '/create') {
    console.log(`Creating game for ${query.name}`);

    let game = new Game();
    while (games.has(game.gameCode)) game = new Game();
    game.addPlayer(ws);
    games.set(game.gameCode, game);
    ws.send(JSON.stringify({ type: 'INIT_AFTER_CREATE', name: query.name, gameCode: game.gameCode, teamOne: game.teamOne }));
  } else {
    ws.close();
  }

  ws.on('message', (msg) => {
    console.log(`Message from ${ws.id}: ${msg}`);
    ws.send('Received message');
  });

  ws.on('close', () => {
    console.log(`Closed ${ws.id}`);
  });
});
