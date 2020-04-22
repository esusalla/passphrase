import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import WebSocket from 'ws';

import { categoryList, skipList, nameLengthLimit } from '../shared/constants';
import Game from './Game';

const games = new Map();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => res.redirect('/'));

wss.on('connection', (ws, req) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  ws.isAlive = true;
  ws.on('pong', heartbeat);
  ws.uuid = query.uuid || uuidv4();
  ws.name = query.name.length > nameLengthLimit ? query.name.substring(0, nameLengthLimit).toUpperCase() : query.name.toUpperCase();
  let gameCode = ''; // Used for clearing game after socket has been closed and no longer holds reference

  if (pathname === '/join') {
    // Check if game code is valid
    if (!games.has(query.gameCode.toUpperCase())) {
      // send game doesn't exist error
      ws.close();
      return;
    }

    const game = games.get(query.gameCode.toUpperCase());
    ws.gameCode = game.gameCode;
    gameCode = game.gameCode; // Used for clearing game after socket has been closed and no longer holds reference

    // Check if name is valid
    if (!game.addPlayer(ws)) {
      // Check if player was previously connected and attempt to reconnect if so
      if (!game.reconnectPlayer(ws, query.uuid)) {
        // send player already exists error
        ws.close();
        return;
      }

      // Send full game state to reconnected player
      const lastWord = game.gameStage === 'roundActive' ? game.lastWord : '';
      const currentWord = game.playerOrder[0] === ws.name ? game.currentWord : '';
      const { skipsAvailable } = game.players.get(ws.name);
      ws.send(JSON.stringify({ type: 'INIT_AFTER_RECONNECT', name: ws.name, gameCode: game.gameCode, gameStage: game.gameStage, hostName: game.host.name, category: game.category, skipsAvailable, skipsAllowed: game.skipsAllowed, teamOne: game.teamOne, teamTwo: game.teamTwo, playerOrder: game.playerOrder, teamOneScore: game.teamOneScore, teamTwoScore: game.teamTwoScore, lastWord, currentWord }));
    } else {
      // Send current game state to newly joined player
      ws.send(JSON.stringify({ type: 'INIT_AFTER_JOIN', name: ws.name, gameCode: game.gameCode, gameStage: game.gameStage, hostName: game.host.name, category: game.category, skipsAllowed: game.skipsAllowed, teamOne: game.teamOne, teamTwo: game.teamTwo, uuid: ws.uuid }));

      // Send updated teams to all other players
      for (const [playerName, player] of game.players) {
        if (playerName !== ws.name) player.send(JSON.stringify({ type: 'SET_TEAMS', teamOne: game.teamOne, teamTwo: game.teamTwo }));
      }
    }
  } else if (pathname === '/create') {
    // Iterate to make sure there are no duplicate game codes
    let game = new Game();
    while (games.has(game.gameCode)) game = new Game();
    ws.gameCode = game.gameCode;
    gameCode = game.gameCode; // Used for clearing game after socket has been closed and no longer holds reference

    game.addPlayer(ws);
    games.set(game.gameCode, game);

    // Send initial game state to new host
    ws.send(JSON.stringify({ type: 'INIT_AFTER_CREATE', name: ws.name, gameCode: game.gameCode, uuid: ws.uuid, gameStage: game.gameStage }));
  } else {
    ws.close();
  }


  ws.on('close', () => {
    // On socket close, check if all other players (sockets) in game are also closed. If so, delete game
    if (!games.has(gameCode)) return;
    const game = games.get(gameCode);

    for (const player of game.players.values()) {
      if (player.readyState !== WebSocket.CLOSED) return;
    }
    games.delete(game.gameCode);
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
      case 'RANDOMIZE_TEAMS': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        game.randomizeTeams();

        // Send updated teams to all players
        for (const player of game.players.values()) {
          player.send(JSON.stringify({ type: 'SET_TEAMS', teamOne: game.teamOne, teamTwo: game.teamTwo }));
        }
        break;
      }
      case 'START_GAME': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        if (!game.startGame()) break;

        // Send updated game stage and player order to all players
        for (const player of game.players.values()) {
          player.send(JSON.stringify({ type: 'INIT_AFTER_START', gameStage: game.gameStage, playerOrder: game.playerOrder, skipsAllowed: game.skipsAllowed }));
        }
        break;
      }
      case 'START_ROUND': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.getActivePlayer().uuid) break;
        const player = game.getActivePlayer();
        game.startRound();

        // Clear last word from last round and Send updated game stage to all players
        for (const player of game.players.values()) {
          player.send(JSON.stringify({ type: 'UPDATE_AFTER_ROUND_START', gameStage: game.gameStage, lastWord: '' }));
        }

        // Send new word to active player
        player.send(JSON.stringify({ type: 'SET_CURRENT_WORD', currentWord: game.currentWord }));
        break;
      }
      case 'USE_SKIP': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        const activePlayer = game.getActivePlayer();
        if (ws.uuid !== activePlayer.uuid) break;
        if (activePlayer.skipsAvailable === 'Unlimited' || activePlayer.skipsAvailable > 0) {
          if (!isNaN(activePlayer.skipsAvailable)) activePlayer.skipsAvailable--;
          game.skipWord();

          // Send new word to active player
          activePlayer.send(JSON.stringify({ type: 'SET_CURRENT_WORD', currentWord: game.currentWord }));
        }
        break;
      }
      case 'PASS_TO_NEXT_PLAYER': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        let activePlayer = game.getActivePlayer();
        if (ws.uuid !== activePlayer.uuid) break;
        game.passToNextPlayer();

        // Send updated player order to all players
        for (const player of game.players.values()) {
          player.send(JSON.stringify({ type: 'UPDATE_AFTER_PASS', playerOrder: game.playerOrder, lastWord: game.lastWord }));
        }

        // Send new word to new active player
        activePlayer = game.getActivePlayer();
        activePlayer.send(JSON.stringify({ type: 'SET_CURRENT_WORD', currentWord: game.currentWord }));
        break;
      }
      case 'RESTART_GAME': {
        if (!games.has(ws.gameCode)) break;
        const game = games.get(ws.gameCode);
        if (ws.uuid !== game.host.uuid) break;
        game.restart();

        // Send updated game state to all players
        for (const player of game.players.values()) {
          player.send(JSON.stringify({ type: 'SET_GAME_STAGE', gameStage: game.gameStage }));
        }
        break;
      }
      default:
        break;
    }
  });
});

const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) {
      ws.terminate();
    } else {
      ws.isAlive = false;
      ws.ping(() => { });
    }
  });
}, 30000);

function heartbeat() {
  this.isAlive = true;
}

wss.on('close', () => {
  clearInterval(interval);
});

server.listen(8080);
