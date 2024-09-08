import { Gameboard } from './gameboard.js';

//Two types of players: real and computer player
export class Player {
  constructor(name, type, elementQuery, isActive = false) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard();
    this.elementQuery = elementQuery;
    this.isActive = isActive;
  }

  setAsActive() {
    this.isActive = true;
  }

  setAsOpponent() {
    this.isActive = false;
  }
}
