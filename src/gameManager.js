import { DOMManager } from './domManager.js';
import { Player } from './player.js';
import { Ship } from './ship.js';
import PubSub from 'pubsub-js';

const REAL_PLAYERS_GAME = 'start game with real players';
const GAME_WITH_BOT = 'start game with a bot';
const SAME_PLAYER = 'same players move';
const NEXT_PLAYER = 'next players move';
const NEW_GAME = 'new game';
const CHANGE_NAMES = 'change names';

//places the ship at a random position on the board
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

let dom = new DOMManager();
let firstPlayer;
let secondPlayer;

function startGame(firstPlayerType, secondPlayerType) {
  firstPlayer = new Player('Player 1', firstPlayerType, '.first-player', true);
  secondPlayer = new Player(
    'Player 2',
    secondPlayerType,
    '.second-player',
    false,
    firstPlayer.gameboard
  );

  if (secondPlayerType === 'computer')
    secondPlayer.gameboard.isEditable = false;

  randomizeShips(firstPlayer);
  randomizeShips(secondPlayer);

  dom.populateBoard(firstPlayer, secondPlayer);
}

//checks if all boats of either player have been sunk
function checkForWinner() {
  if (firstPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(secondPlayer);
  else if (secondPlayer.gameboard.haveAllBeenSunk())
    dom.showEndDialog(firstPlayer);
}

//when game mode with two real players is chosen
PubSub.subscribe(REAL_PLAYERS_GAME, () => {
  startGame('real', 'real');
});

//when game mode of game with a bot is chosen
PubSub.subscribe(GAME_WITH_BOT, () => {
  startGame('real', 'computer');
});

//ship was hit, same player makes the next move
PubSub.subscribe(SAME_PLAYER, () => {
  if (secondPlayer.isActive === true && secondPlayer.type === 'computer') {
    secondPlayer.bot.attack();
  }
  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});

//ship was missed, opponent makes the next move, becomes the active player
PubSub.subscribe(NEXT_PLAYER, () => {
  if (firstPlayer.isActive) {
    firstPlayer.isActive = false;
    secondPlayer.isActive = true;

    if (secondPlayer.type === 'computer') {
      secondPlayer.bot.attack();

      //makes real player's board uneditable when it's bot's turn (real players always makes the first move)
      firstPlayer.gameboard.isEditable = false;
    }
  } else {
    firstPlayer.isActive = true;
    secondPlayer.isActive = false;
  }

  dom.populateBoard(firstPlayer, secondPlayer, true);
  checkForWinner();
});

//when a new game is requested
PubSub.subscribe(NEW_GAME, () =>
  startGame(firstPlayer.type, secondPlayer.type)
);

//change of players' names requested
PubSub.subscribe(CHANGE_NAMES, (message, newNames) => {
  firstPlayer.changeName(newNames[0]);
  firstPlayer.changeName(newNames[1]);
});
