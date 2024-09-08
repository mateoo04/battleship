import PubSub from 'pubsub-js';

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.missed = [];
  }

  #isEmpty(x, y) {
    return this.board[x][y] === null;
  }

  placeShip(ship, x, y, orientation) {
    //checking if there is free space in and around the chosen area
    //case for a horizontally aligned ship
    if (orientation === 'horizontal') {
      //checking if ship is too large
      if (y + ship.length > 10) return;

      for (let i = Math.max(x - 1, 0); i <= Math.min(9, x + 1); i++) {
        for (
          let j = Math.max(0, y - 1);
          j <= Math.min(9, y + ship.length - 1);
          j++
        ) {
          if (!this.#isEmpty(i, j)) return;
        }
      }

      //placing a ship
      for (let j = y; j < y + ship.length; j++) {
        this.board[x][j] = ship;
      }
    }
    //case for a vertically aligned ship
    else {
      //checking if ship is too large
      if (x + ship.length > 10) return;

      for (let j = Math.max(0, y - 1); j <= Math.min(9, y + 1); j++) {
        for (
          let i = Math.max(0, x - 1);
          i <= Math.min(9, x + ship.length - 1);
          i++
        ) {
          if (!this.#isEmpty(i, j)) return;
        }
      }

      //placing a ship
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] !== null && this.board[x][y] !== 'hit') {
      this.board[x][y].hit();
      this.board[x][y] = 'hit';
      return true;
    }

    this.missed.push([6, 4]);
    return false;
  }

  haveAllBeenSunk() {
    console.table(this.board);
    return !this.board.some((row) =>
      row.some((item) => item !== null && item !== 'hit')
    );
  }
}
