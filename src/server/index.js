import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import WebSocket from 'ws';

import * as actions from '../shared/actions';
import * as handlers from './handlers';
import { limitName } from './utils';

const games = new Map();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.get(['/create', '/join'], (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('*', (req, res) => res.redirect('/'));

wss.on('connection', (player, req) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  player.gameCode = (query.gameCode || '').toUpperCase();
  player.name = limitName(query.name);
  player.uuid = query.uuid || uuidv4();

  // New players can only connect by creating or joining game
  if (pathname === '/create') player.gameCode = handlers.createGame(player, games);
  else if (pathname === '/join') handlers.joinGame(player, games);
  else {
    player.close();
    return;
  }

  // Used with ping from socket server to detect disconnected sockets
  player.connected = true;
  player.on('pong', () => { player.connected = true; });

  // Handle all client messages
  player.on('message', (msg) => {
    const data = JSON.parse(msg);
    if (!games.has(player.gameCode)) return;
    const game = games.get(player.gameCode);

    switch (data.type) {
      case actions.SET_CATEGORY:
        handlers.setCategory(player, game, data);
        break;
      case actions.SET_SKIPS_ALLOWED:
        handlers.setSkipsAllowed(player, game, data);
        break;
      case actions.CHANGE_PLAYER_TEAM:
        handlers.changePlayerTeam(player, game, data);
        break;
      case actions.RANDOMIZE_TEAMS:
        handlers.randomizeTeams(player, game);
        break;
      case actions.START_GAME:
        handlers.startGame(player, game);
        break;
      case actions.START_ROUND:
        handlers.startRound(player, game);
        break;
      case actions.USE_SKIP:
        handlers.useSkip(player, game);
        break;
      case actions.PASS_TO_NEXT_PLAYER:
        handlers.passToNextPlayer(player, game);
        break;
      case actions.RESTART_GAME:
        handlers.restartGame(player, game);
        break;
      default:
        break;
    }
  });

  // On socket close, check if all other players in game are disconnected and delete game if so
  player.on('close', () => {
    if (!games.has(player.gameCode)) return;
    const game = games.get(player.gameCode);

    for (const ws of game.players.values()) {
      if (ws.readyState !== WebSocket.CLOSED) return;
    }

    games.delete(game.gameCode);
  });
});

// Intermittently ping all clients to detect any disconnected sockets
const interval = setInterval(() => {
  wss.clients.forEach((player) => {
    if (!player.connected) player.terminate();
    else {
      player.connected = false;
      player.ping(() => { });
    }
  });
}, 30000);

wss.on('close', () => {
  clearInterval(interval);
});

server.listen(8080);
