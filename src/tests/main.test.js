import { Ship } from '../ship.js';
import { Gameboard } from '../gameboard.js';

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
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  beforeEach(() => gameboard.placeShip(ship, 2, 2, 'horizontal'));

  describe('placeShip method', () => {
    test('places the ship at the correct starting position', () => {
      expect(gameboard.board[2][4]).toBe(ship);
    });
  });

  describe('receiveAttack method', () => {
    test('hits the ship and returns true', () => {
      expect(gameboard.receiveAttack(2, 3)).toBe(true);
    });

    test('misses the ship and returns aimed position', () => {
      gameboard.receiveAttack(6, 4);

      expect(gameboard.missed[gameboard.missed.length - 1]).toBe(6, 4);
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
