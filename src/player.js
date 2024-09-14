import { Gameboard } from './gameboard.js';
import { Bot } from './bot.js';

//Two types of players: real and computer player
export class Player {
  constructor(name, type, elementQuery, isActive, opponentsBoard = null) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard();
    this.elementQuery = elementQuery;
    this.isActive = isActive;
    if (opponentsBoard !== null && type === 'computer') {
      this.bot = new Bot(opponentsBoard);
    }
  }

  setAsActive() {
    this.isActive = true;
  }

  setAsOpponent() {
    this.isActive = false;
  }

  changeName(newName) {
    this.name = newName;
  }
}
