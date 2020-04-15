class Player {
  constructor(ws, name, gameCode) {
    this.ws = ws;
    this.ip = ws.ip;
    this.name = name;
    this.gameCode = gameCode;
  }

  send(msg) {
    this.ws.send(msg);
  }
}

export default Player;
