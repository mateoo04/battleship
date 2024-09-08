import { DOMManager } from './domManager.js';
import { Player } from './player.js';
import { Ship } from './ship.js';
import PubSub from 'pubsub-js';

const SHIP_HIT = 'ship hit';
const SHIP_MISSED = 'ship missed';
const NEW_GAME = 'new game';
const CHANGE_NAMES = 'change names';

let dom = new DOMManager();
let firstPlayer;
let secondPlayer;

function startGameWithBot() {
  firstPlayer = new Player(
    'Player 1',
    'real',
    '.first-player .board-grid-container',
    true
  );
  secondPlayer = new Player(
    'Player 2',
    'computer',
    '.second-player .board-grid-container'
  );

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

function makeBotMove() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  while (
    firstPlayer.gameboard.board[x][y] === null ||
    firstPlayer.gameboard.board[x][y] instanceof Ship
  ) {
    firstPlayer.gameboard.receiveAttack(x, y);
  }
}

function checkForWinner() {
  if (firstPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(secondPlayer);
  else if (secondPlayer.gameboard.haveAllBeenSunk())
    dom.showEndDialog(firstPlayer);
}

PubSub.subscribe(SHIP_HIT, () => {
  if (secondPlayer.isActive === true) {
    makeBotMove();
  }

  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});

PubSub.subscribe(SHIP_MISSED, () => {
  if (firstPlayer.isActive) {
    firstPlayer.isActive = false;
    secondPlayer.isActive = true;

    makeBotMove();
  } else {
    firstPlayer.isActive = true;
    secondPlayer.isActive = false;
  }

  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});

PubSub.subscribe(NEW_GAME, () => startGameWithBot());

PubSub.subscribe(CHANGE_NAMES, (message, newNames) => {
  firstPlayer.changeName(newNames[0]);
  firstPlayer.changeName(newNames[1]);
});

startGameWithBot();
