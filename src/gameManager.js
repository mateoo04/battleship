import { DOMManager } from './domManager.js';
import { Player } from './player.js';
import { Ship } from './ship.js';

let dom;

function setUpGame() {
  const firstPlayer = new Player('Player 1', 'real');
  const secondPlayer = new Player('Player 2', 'computer');

  dom = new DOMManager(firstPlayer, secondPlayer);

  //code for manual ship creation should be removed after enabling user to place ships by himself
  firstPlayer.gameboard.placeShip(new Ship(1), 7, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new Ship(2), 0, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new Ship(3), 4, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new Ship(4), 3, 8, 'vertical');
  firstPlayer.gameboard.placeShip(new Ship(5), 5, 6, 'vertical');

  secondPlayer.gameboard.placeShip(new Ship(1), 7, 2, 'horizontal');
  secondPlayer.gameboard.placeShip(new Ship(2), 0, 2, 'horizontal');
  secondPlayer.gameboard.placeShip(new Ship(3), 2, 8, 'vertical');
  secondPlayer.gameboard.placeShip(new Ship(4), 6, 4, 'horizontal');
  secondPlayer.gameboard.placeShip(new Ship(5), 5, 0, 'vertical');

  dom.populateBoard(firstPlayer, secondPlayer);
}

setUpGame();
