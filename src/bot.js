import { Ship } from './ship.js';

export class Bot {
  constructor(opponentsGameboard) {
    this.opponentsGameboard = opponentsGameboard;
    this.attackQueue = [];
  }

  attack() {
    let orientation = null;
    let x;
    let y;

    if (this.attackQueue.length !== 0) {
      x = this.attackQueue[0].x;
      y = this.attackQueue[0].y;
      orientation = this.attackQueue[0].orientation;

      this.attackQueue.shift();
    } else {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);

      //making sure position hasn't been attacked yet
      while (
        !(
          this.opponentsGameboard.board[x][y] === null ||
          this.opponentsGameboard.board[x][y] instanceof Ship
        )
      ) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
    }

    if (this.opponentsGameboard.receiveAttack(x, y)) {
      const directions = [
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 0, y: -1 },
      ];

      for (const d of directions) {
        const targetedX = x + d.x;
        const targetedY = y + d.y;

        if (
          targetedX >= 0 &&
          targetedX <= 9 &&
          targetedY >= 0 &&
          targetedY <= 9
        ) {
          this.attackQueue.push({
            x: targetedX,
            y: targetedY,
            orientation: d.x === 0 ? 'horizontal' : 'vertical',
          });
        }
      }

      //looping through the attack queue to remove elements of an inadequate orientation
      if (orientation !== null) {
        for (let i = 0; i < this.attackQueue.length; i++) {
          if (this.attackQueue[i].orientation !== orientation) {
            this.attackQueue.splice(i, 1);
          }
        }
      }
    }

    return [x, y];
  }
}
