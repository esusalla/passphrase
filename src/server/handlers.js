import { categoryList, skipList } from "../shared/constants";
import Game from "./Game";

export function createGame(player, games) {
  // Iterate to make sure there are no duplicate game codes
  let game = new Game(player);
  while (games.has(game.gameCode)) game = new Game(player);

  games.set(game.gameCode, game);

  // Send default setup state to new player / host
  player.send(JSON.stringify({
    category: game.category,
    gameCode: game.gameCode,
    gameStage: game.gameStage,
    hostName: game.host.name,
    name: player.name,
    skipsAllowed: game.skipsAllowed,
    teamOne: game.teamOne,
    teamTwo: game.teamTwo,
    uuid: player.uuid,
  }));

  // Return game code for storing on player socket object
  return game.gameCode;
}

export function joinGame(player, games) {
  // Check if game code is valid
  if (!games.has(player.gameCode)) {
    player.send(JSON.stringify({ error: "Game with this code does not exist" }));
    player.close();
    return;
  }

  const game = games.get(player.gameCode);

  // Check if player was previously connected
  if (game.reconnectPlayer(player)) {
    // Only send current word if it"s reconnected player"s turn
    const currentWord = game.getActivePlayer() === player.name ? game.currentWord : "";
    const elapsedRoundTime = new Date().getTime() - game.roundStartTime;

    // Send reconnected player full game state
    player.send(JSON.stringify({
      category: game.category,
      currentWord,
      elapsedRoundTime,
      gameCode: game.gameCode,
      gameStage: game.gameStage,
      hostName: game.host.name,
      lastWord: game.lastWord,
      name: player.name,
      playerOrder: game.playerOrder,
      skipsAllowed: game.skipsAllowed,
      skipsAvailable: game.players.get(player.name).skipsAvailable,
      teamOne: game.teamOne,
      teamTwo: game.teamTwo,
      teamOneScore: game.teamOneScore,
      teamTwoScore: game.teamTwoScore,
    }));
    return;
  }

  // Player is not reconnecting, so attempt to add new player
  const result = game.addPlayer(player);
  if (result.error) {
    // Send error message back to player if they could not be added to game
    player.send(JSON.stringify(result));
    player.close();
    return;
  }

  // Send current setup state to newly joined player
  player.send(JSON.stringify({
    category: game.category,
    gameCode: game.gameCode,
    gameStage: game.gameStage,
    hostName: game.host.name,
    name: player.name,
    skipsAllowed: game.skipsAllowed,
    teamOne: game.teamOne,
    teamTwo: game.teamTwo,
    uuid: player.uuid,
  }));

  // Send updated teams to all other players
  for (const [otherPlayerName, otherPlayer] of game.players) {
    if (otherPlayerName !== player.name) {
      otherPlayer.send(JSON.stringify({
        teamOne: game.teamOne,
        teamTwo: game.teamTwo
      }));
    }
  }
}

export function setCategory(host, game, data) {
  if (!categoryList.includes(data.category)) return;
  if (host.uuid !== game.host.uuid) return;
  game.category = data.category;

  // Send updated category to all other players
  for (const [playerName, player] of game.players) {
    if (playerName !== host.name) player.send(JSON.stringify({ category: game.category }));
  }
}

export function setSkipsAllowed(host, game, data) {
  if (!skipList.includes(data.skipsAllowed)) return;
  if (host.uuid !== game.host.uuid) return;
  game.skipsAllowed = data.skipsAllowed;

  // Send updated skips allowed to all other players
  for (const [playerName, player] of game.players) {
    if (playerName !== host.name) player.send(JSON.stringify({ skipsAllowed: game.skipsAllowed }));
  }
}

export function changePlayerTeam(host, game, data) {
  if (host.uuid !== game.host.uuid) return;
  game.changePlayerTeam(data.name);

  // Send updated teams to all other players
  for (const [playerName, player] of game.players) {
    if (playerName !== host.name) player.send(JSON.stringify({ teamOne: game.teamOne, teamTwo: game.teamTwo }));
  }
}

export function randomizeTeams(host, game) {
  if (host.uuid !== game.host.uuid) return;
  game.randomizeTeams();

  // Send updated teams to all players
  for (const player of game.players.values()) {
    player.send(JSON.stringify({ teamOne: game.teamOne, teamTwo: game.teamTwo }));
  }
}

export function startGame(host, game) {
  if (host.uuid !== game.host.uuid) return;
  if (!game.startGame()) return;

  // Send updated game stage, player order and skips available to all players
  // Reset team scores to cover cases where player was disconnected from game and created new one
  for (const player of game.players.values()) {
    player.send(JSON.stringify({
      gameStage: game.gameStage,
      playerOrder: game.playerOrder,
      skipsAvailable: player.skipsAvailable,
      teamOneScore: game.teamOneScore,
      teamTwoScore: game.teamTwoScore,
    }));
  }
}

export function startRound(player, game) {
  const activePlayer = game.getActivePlayer();
  if (player.uuid !== activePlayer.uuid) return;
  game.startRound();

  // Clear last word from previous round, send updated game stage, and reset elapsed round time to all other players
  for (const [otherPlayerName, otherPlayer] of game.players) {
    if (otherPlayerName !== activePlayer.name) {
      otherPlayer.send(JSON.stringify({
        elapsedRoundTime: 0,
        gameStage: game.gameStage,
        lastWord: game.lastWord,
      }));
    }
  }

  // Send above information in addition to current word and reset skips available to active player
  activePlayer.send(JSON.stringify({
    currentWord: game.currentWord,
    elapsedRoundTime: 0,
    gameStage: game.gameStage,
    lastWord: game.lastWord,
    skipsAvailable: activePlayer.skipsAvailable,
  }));
}

export function useSkip(player, game) {
  const activePlayer = game.getActivePlayer();
  if (player.uuid !== activePlayer.uuid) return;
  if (!game.skipWord()) return;

  // Send new word to active player
  activePlayer.send(JSON.stringify({ currentWord: game.currentWord }));
}

export function passToNextPlayer(player, game) {
  if (player.uuid !== game.getActivePlayer().uuid) return;
  game.passToNextPlayer();

  // New active player after turn has been passed
  const activePlayer = game.getActivePlayer();

  // Send updated player order and last word to all other players
  for (const [otherPlayerName, otherPlayer] of game.players) {
    if (otherPlayerName !== activePlayer.name) {
      otherPlayer.send(JSON.stringify({
        lastWord: game.lastWord,
        playerOrder: game.playerOrder
      }));
    }
  }

  // Send current word, updated player order, and reset skips available to active player
  activePlayer.send(JSON.stringify({
    currentWord: game.currentWord,
    playerOrder: game.playerOrder,
    skipsAvailable: activePlayer.skipsAvailable,
  }));
}

export function restartGame(host, game) {
  if (host.uuid !== game.host.uuid) return;
  game.restart();

  // Send restarted game state to all players
  for (const player of game.players.values()) {
    player.send(JSON.stringify({
      currentWord: game.currentWord,
      gameStage: game.gameStage,
      lastWord: game.lastWord,
      teamOneScore: game.teamOneScore,
      teamTwoScore: game.teamTwoScore,
    }));
  }
}
