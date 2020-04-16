import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import WebSocket from 'ws';

import Game from './Game';

const categoryList = ['EVERYTHING', 'SCIENCE', 'PEOPLE', 'HISTORY']; // get from postgres
const skipList = ['0', '1', '2', '3', 'Unlimited'];
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

    // Send current game state to newly joined player
    ws.send(JSON.stringify({ type: 'INIT_AFTER_JOIN', name: ws.name, gameCode: game.gameCode, hostName: game.host.name, category: game.category, skipsAllowed: game.skipsAllowed, teamOne: game.teamOne, teamTwo: game.teamTwo }));

    // Send updated teams to all other players
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

    // Send initial game state to new host
    ws.send(JSON.stringify({ type: 'INIT_AFTER_CREATE', name: ws.name, gameCode: game.gameCode }));
  } else {
    ws.close();
  }

  ws.on('close', () => {
    // Handle any close logic
  });

  ws.on('message', (msg) => {
    // Handle client messages
    const data = JSON.parse(msg);
    switch (data.type) {
      case 'SET_CATEGORY': {
        if (!categoryList.includes(data.category)) break;
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        game.category = data.category;

        // Send updated category to all other players
        for (const [playerName, player] of game.players) {
          if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_CATEGORY', category: data.category }));
        }
        break;
      }
      case 'SET_SKIPS_ALLOWED': {
        if (!skipList.includes(data.skipsAllowed)) break;
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        game.skipsAllowed = data.skipsAllowed;

        // Send updated skips allowed to all other players
        for (const [playerName, player] of game.players) {
          if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_SKIPS_ALLOWED', skipsAllowed: data.skipsAllowed }));
        }
        break;
      }
      case 'CHANGE_PLAYER_TEAM': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        const updatedTeamOne = game.teamOne.slice();
        const updatedTeamTwo = game.teamTwo.slice();
        if (game.teamOne.includes(data.name)) {
          updatedTeamOne.splice(updatedTeamOne.indexOf(data.name), 1);
          updatedTeamTwo.push(data.name);
        } else if (game.teamTwo.includes(data.name)) {
          updatedTeamTwo.splice(updatedTeamTwo.indexOf(data.name), 1);
          updatedTeamOne.push(data.name);
        }
        game.teamOne = updatedTeamOne;
        game.teamTwo = updatedTeamTwo;

        // Send updated teams to all other players
        for (const [playerName, player] of game.players) {
          if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_TEAMS', teamOne: game.teamOne, teamTwo: game.teamTwo }));
        }
        break;
      }
      default:
        break;
    }
  });
});
