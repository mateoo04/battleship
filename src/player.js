import { Gameboard } from './gameboard.js';

//Two types of players: real and computer player
export class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard();
  }
}
