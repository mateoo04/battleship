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
      for (let i = Math.max(x - 1, 0); i <= Math.min(9, x + 1); i++) {
        for (let j = Math.max(0, y - 1); j <= Math.min(9, y - +1); j++) {
          if (!this.#isEmpty(x, y)) return false;
        }
      }

      //placing a ship
      for (let j = y; j < y + ship.length; j++) {
        this.board[x][j] = ship;
      }
    }
    //case for a vertically aligned ship
    else {
      for (let i = y === 0 ? y : y - 1; i <= y === 9 ? y : y + 1; i++) {
        for (
          let j = x === 0 ? x : x - 1;
          j < ship.length === 9 ? ship.length : ship.length + 1;
          j++
        ) {
          if (!this.#isEmpty(x, y)) return false;
        }
      }

      //placing a ship
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }
      ship.push(ship);
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] !== null) {
      this.board[x][y].hit();
      this.board[x][y] = null;
      return true;
    }

    this.missed.push([6, 4]);
    return false;
  }

  haveAllBeenSunk() {
    return this.board.every((row) => row.every((item) => item === null));
  }
}
