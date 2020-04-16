import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import WebSocket from 'ws';

import Game from './Game';

const games = new Map();
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  ws.uuid = uuidv4();
  ws.name = query.name.toUpperCase();

  if (pathname === '/join') {
    // Check if game code is valid
    if (!games.has(query.gameCode.toUpperCase())) {
      // send game doesn't exist error
      ws.close();
      return;
    }

    const game = games.get(query.gameCode.toUpperCase());
    ws.gameCode = game.gameCode;

    // Check if name is valid
    const added = game.addPlayer(ws);
    if (!added) {
      // send player already exists error
      ws.close();
      return;
    }

    // Send current game state for newly joined player
    ws.send(JSON.stringify({ type: 'INIT_AFTER_JOIN', name: ws.name, gameCode: game.gameCode, hostName: game.host.name, teamOne: game.teamOne, teamTwo: game.teamTwo }));

    // Send updated teams for all other players
    for (const [playerName, player] of game.players) {
      if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_TEAMS', teamOne: game.teamOne, teamTwo: game.teamTwo }));
    }
  } else if (pathname === '/create') {
    // Iterate to make sure there are no duplicate game codes
    let game = new Game();
    while (games.has(game.gameCode)) game = new Game();
    ws.gameCode = game.gameCode;

    game.addPlayer(ws);
    games.set(game.gameCode, game);

    // Send initial game state for new host
    ws.send(JSON.stringify({ type: 'INIT_AFTER_CREATE', name: ws.name, gameCode: game.gameCode }));
  } else {
    ws.close();
  }

  ws.on('close', () => {
    // Handle any close logic
  });

  ws.on('message', () => {
    // Handle client messages
  });
});
