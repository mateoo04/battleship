import { Ship } from '../ship.js';
import { Gameboard } from '../gameboard.js';
import { Player } from '../player.js';

describe('Ship class', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(2);
  });

  describe('isSunk method', () => {
    test(`returns false for a ship that wasn't hit`, () => {
      expect(ship.isSunk()).toBe(false);
    });
  });

  describe('isSunk and isHit method', () => {
    test(`returns true for a ship that was hit amount of times equal to its length`, () => {
      ship.hit();
      ship.hit();

      expect(ship.isSunk()).toBe(true);
    });
  });
});

describe('Gameboard class', () => {
  let gameboard;
  const ship = new Ship(3);

  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.placeShip(ship, 2, 2, 'horizontal');
  });

  describe('placeShip method', () => {
    test('places the ship at the correct starting position', () => {
      expect(gameboard.board[2][4]).toBe(ship);
    });

    test("second ship isn't placed due to proximity to the fist one", () => {
      gameboard.placeShip(ship, 3, 2, 'vertical');

      expect(gameboard.board[3][2]).toBe(null);
    });
  });

  describe('receiveAttack method', () => {
    test('hits the ship and returns true', () => {
      expect(gameboard.receiveAttack(2, 3)).toBe(true);
    });

    test('misses the ship and returns false', () => {
      expect(gameboard.receiveAttack(6, 4)).toBe(false);
    });

    test('ship should not be added due to it being to large for the chosen position', () => {
      gameboard.placeShip(ship, 8, 9, 'horizontal');

      expect(gameboard.board[8][9]).toBe(null);
    });
  });

  describe('receiveAttack and haveAllBeenSunk method', () => {
    test('ship should be sunk, true should be returned', () => {
      gameboard.receiveAttack(2, 2);
      gameboard.receiveAttack(2, 3);
      gameboard.receiveAttack(2, 4);

      expect(gameboard.haveAllBeenSunk()).toBe(true);
    });

    test("ship shouldn't be sunk and false should be returned", () => {
      gameboard.receiveAttack(2, 3);

      expect(gameboard.haveAllBeenSunk()).toBe(false);
    });
  });
});

describe('Player class', () => {
  test('correctly assigns a type to the Player object', () => {
    const player = new Player('Player 1', 'real', 0);

    expect(player.type).toBe('real');
  });
  test('correctly assigns a board to the Player object', () => {
    const player = new Player('Player 1', 'real', 0);

    expect(player.gameboard.board[9][9]).toBe(null);
  });
});
