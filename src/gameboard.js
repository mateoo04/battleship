import PubSub from 'pubsub-js';
import { Ship } from './ship';
import isEqual from 'lodash/isEqual';

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.isEditable = true;
  }

  //checks if a position is empty
  isEmpty(x, y) {
    return this.board[x][y] === null;
  }

  placeShip(ship, x, y, orientation) {
    //checking if there is free space in and around the chosen area
    //case for a horizontally aligned ship
    if (orientation === 'horizontal') {
      //checking if ship is too large
      if (y + ship.length > 10) return false;

      if (!this.canShipBePlacedHorizontally(ship.length, x, y)) return false;

      //placing a ship
      for (let j = y; j < y + ship.length; j++) {
        this.board[x][j] = ship;
      }

      return true;
    }
    //case for a vertically aligned ship
    else {
      //checking if ship is too large
      if (x + ship.length > 10) return false;

      if (!this.canShipBePlacedVertically(ship.length, x, y)) return false;

      //placing a ship
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }

      return true;
    }
  }

  canShipBePlacedHorizontally(length, x, y, shipException = 0) {
    for (let i = Math.max(x - 1, 0); i <= Math.min(9, x + 1); i++) {
      for (let j = Math.max(0, y - 1); j <= Math.min(9, y + length); j++) {
        if (
          !this.isEmpty(i, j) &&
          this.board[i][j] &&
          !isEqual(this.board[i][j], shipException)
        )
          return false;
      }
    }

    return true;
  }

  canShipBePlacedVertically(length, x, y, shipException = 0) {
    for (let j = Math.max(0, y - 1); j <= Math.min(9, y + 1); j++) {
      for (let i = Math.max(0, x - 1); i <= Math.min(9, x + length); i++) {
        if (!this.isEmpty(i, j) && !isEqual(this.board[i][j], shipException)) {
          return false;
        }
      }
    }

    return true;
  }

  receiveAttack(x, y) {
    //directions for adjacent diagonal neighbors
    const directions = [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ];

    let wasHit = false;

    if (this.board[x][y] === null) {
      this.board[x][y] = 'attacked';
    } else if (
      this.board[x][y] !== null &&
      this.board[x][y] !== 'hit' &&
      this.board[x][y] !== 'attacked'
    ) {
      this.board[x][y].hit();
      this.board[x][y] = 'hit';

      //marking adjacent diagonal neighbors as attacked
      for (const d of directions) {
        const targetedX = x + d.x;
        const targetedY = y + d.y;

        if (
          targetedX >= 0 &&
          targetedX <= 9 &&
          targetedY >= 0 &&
          targetedY <= 9
        ) {
          this.board[targetedX][targetedY] = 'attacked';
        }

        wasHit = true;
      }

      const SAME_PLAYER = 'same players move';
      PubSub.publish(SAME_PLAYER);

      return wasHit;
    }

    const NEXT_PLAYER = 'next players move';
    PubSub.publish(NEXT_PLAYER);
    return false;
  }

  haveAllBeenSunk() {
    return !this.board.some((row) =>
      row.some((item) => item !== null && item !== 'hit' && item !== 'attacked')
    );
  }

  //checks if position is within the board
  #isPositionValid(x, y) {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
  }

  //determines position of a moved ship
  getMovedShipPositions(originalX, originalY, newX, newY) {
    const directions = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];

    let oldPositions = [[originalX, originalY]];
    let newPositions = [[newX, newY]];

    for (let directionIndex = 0; directionIndex <= 3; directionIndex++) {
      let xMove = directions[directionIndex].x;
      let yMove = directions[directionIndex].y;

      //function isEmpty may fail if (x,y) if out of board bounds, so it must be in second place
      while (
        this.#isPositionValid(originalX + xMove, originalY + yMove) &&
        !this.isEmpty(originalX + xMove, originalY + yMove)
      ) {
        const newXItem = newX + xMove;
        const newYItem = newY + yMove;

        if (!this.#isPositionValid(newXItem, newYItem)) return false;

        if (
          this.isEmpty(newXItem, newYItem) ||
          isEqual(
            this.board[newXItem][newYItem],
            this.board[originalX][originalY]
          )
        ) {
          newPositions.push([newXItem, newYItem]);
          oldPositions.push([originalX + xMove, originalY + yMove]);
        } else {
          return false;
        }

        xMove = directions[directionIndex].x + xMove;
        yMove = directions[directionIndex].y + yMove;
      }
    }

    if (newPositions.length === 1) {
      if (
        !this.canShipBePlacedHorizontally(
          newPositions.length,
          newPositions[0][0],
          newPositions[0][1],
          this.board[originalX][originalY]
        )
      )
        return false;
      return { newPositions: newPositions, oldPositions: oldPositions };
    }
    //horizontal
    else if (newPositions[0][0] === newPositions[1][0]) {
      newPositions.sort((a, b) => a[1] - b[1]);

      if (
        !this.canShipBePlacedHorizontally(
          newPositions.length,
          newPositions[0][0],
          newPositions[0][1],
          this.board[originalX][originalY]
        )
      )
        return false;

      oldPositions.sort((a, b) => a[1] - b[1]);
    }
    //vertical
    else if (newPositions[0][1] === newPositions[1][1]) {
      newPositions.sort((a, b) => a[0] - b[0]);

      if (
        !this.canShipBePlacedVertically(
          newPositions.length,
          newPositions[0][0],
          newPositions[0][1],
          this.board[originalX][originalY]
        )
      )
        return false;

      oldPositions.sort((a, b) => a[0] - b[0]);
    }

    return { newPositions: newPositions, oldPositions: oldPositions };
  }

  //logic for moving the ship should be located here, not in dommanager, focus of dommanager should be the DOM, displaying data
  moveShip(originalX, originalY, newX, newY) {
    if (
      (originalX === newX && originalY === newY) ||
      (!this.isEmpty(newX, newY) &&
        !isEqual(this.board[originalX][originalY], this.board[newX][newY]))
    )
      return false;

    const positions = this.getMovedShipPositions(
      originalX,
      originalY,
      newX,
      newY
    );

    if (!positions) return false;

    //remove the old ship
    for (let i = 0; i < positions.oldPositions.length; i++) {
      const [xOld, yOld] = positions.oldPositions[i];

      this.board[xOld][yOld] = null;
    }

    this.placeShip(
      new Ship(positions.newPositions.length),
      positions.newPositions[0][0],
      positions.newPositions[0][1],
      positions.newPositions.length === 1
        ? 'horizontal'
        : positions.newPositions[0][0] === positions.newPositions[1][0]
          ? 'horizontal'
          : 'vertical'
    );

    return true;
  }

  getBoatLengthsFromPosition(x, y) {
    const directions = [
      { x: -1, y: 0, quantity: 0 },
      { x: 0, y: 1, quantity: 0 },
      { x: 1, y: 0, quantity: 0 },
      { x: 0, y: -1, quantity: 0 },
    ];

    for (let directionIndex = 0; directionIndex <= 3; directionIndex++) {
      let currentX = x + directions[directionIndex].x;
      let currentY = y + directions[directionIndex].y;

      while (
        this.#isPositionValid(currentX, currentY) &&
        !this.isEmpty(currentX, currentY)
      ) {
        directions[directionIndex].quantity++;

        currentX += directions[directionIndex].x;
        currentY += directions[directionIndex].y;
      }
    }

    return {
      above: directions[0].quantity,
      rightwards: directions[1].quantity,
      below: directions[2].quantity,
      leftwards: directions[3].quantity,
    };
  }
}
