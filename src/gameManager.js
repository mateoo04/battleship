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

  randomizeShips(firstPlayer);
  randomizeShips(secondPlayer);

  dom.populateBoard(firstPlayer, secondPlayer);
}

function randomizeShips(player) {
  for (let i = 1; i <= 5; i++) {
    let shipPlaced = false;

    while (!shipPlaced) {
      shipPlaced = player.gameboard.placeShip(
        new Ship(i),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.random() > 0.5 ? 'horizontal' : 'vertical'
      );
    }
  }
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
