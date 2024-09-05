export class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.hasBeenSunk = false;
  }

  hit() {
    this.timesHit += 1;

    if (this.timesHit === this.length) this.hasBeenSunk = true;
  }

  isSunk() {
    return this.hasBeenSunk;
  }
}
