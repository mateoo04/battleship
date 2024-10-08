import style from './style.css';
import { Ship } from './ship.js';
import PubSub from 'pubsub-js';

const NEW_GAME = 'new game';
const NEXT_PLAYER = 'next players move';
const BOT_MOVE = 'bot is making a move';
const editBoardDialog = document.querySelector('.edit-board-dialog');

export class DOMManager {
  constructor() {
    //'play again' button appears in a dialog after game end
    const playAgainButton = document.querySelector('.play-again-button');
    playAgainButton.addEventListener('click', () => {
      PubSub.publish(NEW_GAME);

      document.querySelector('.end-dialog').close();
    });

    setNameClickListeners();

    //reset button
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {
      PubSub.publish(NEW_GAME);
    });

    //header button to show start menu
    const startMenuButton = document.querySelector('.start-menu-button');
    startMenuButton.addEventListener('click', () => {
      this.showStartMenu();
    });

    this.showStartMenu();
  }

  populateActivePlayersBoard(player) {
    const board = player.gameboard.board;

    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    //iterates over player's board to create a board in HTML out of it
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');

        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';

          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        } else if (board[i][j] !== null && player.type !== 'computer') {
          //second condition makes sure the real player doesn't get a glimpse of bot's board

          item.classList = 'ship';

          item.id = `${i}-${j}`;

          const hasShipAbove =
            i > 0 ? player.gameboard.board[i - 1][j] instanceof Ship : false;
          const hasShipLeft =
            j > 0 ? player.gameboard.board[i][j - 1] instanceof Ship : false;

          //enables moving a ship by dragging its first item at the start of a game
          if (player.gameboard.isEditable && !hasShipAbove && !hasShipLeft) {
            item.draggable = true;

            item.classList.add('moveable-ship-item');

            item.addEventListener('dragstart', (event) => {
              event.dataTransfer.setData('text/plain', event.target.id);

              const surrounding = player.gameboard.getBoatLengthsFromPosition(
                i,
                j
              );

              //adds padding needed to make the dragged item size of the ship it is part of
              if (surrounding.below > 0)
                item.style.paddingBottom = `${surrounding.below * 100}%`;
              if (surrounding.rightwards > 0)
                item.style.paddingRight = `${surrounding.rightwards * 100}%`;
            });

            //removes padding on a previously dragged item
            item.addEventListener('dragend', () => {
              item.style.paddingBottom = '0px';
              item.style.paddingRight = '0px';
            });
          }
        }

        //makes ships moveable at start of the game
        if (player.gameboard.isEditable) {
          item.addEventListener('dragover', (event) => {
            event.preventDefault();
          });

          item.addEventListener('drop', (event) => {
            event.preventDefault();

            const droppedId = event.dataTransfer.getData('text');

            const xCoordinate = droppedId.charAt(0);
            const yCoordinate = droppedId.charAt(2);

            player.gameboard.moveShip(
              parseInt(xCoordinate),
              parseInt(yCoordinate),
              i,
              j
            );

            this.populateActivePlayersBoard(player);
          });
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    document.querySelector(`${player.elementQuery} .players-name`).style.color =
      '#34495e';
    const boardContainer = document.querySelector(
      `${player.elementQuery}  .board-grid-container`
    );

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }

  populateOpponentsBoard(player) {
    const board = player.gameboard.board;

    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    //iterates over player's board to create a board in HTML out of it
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');

        if (!player.gameboard.isEditable) {
          item.addEventListener('click', () => {
            player.gameboard.receiveAttack(i, j);
          });
        }

        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';

          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    document.querySelector(`${player.elementQuery} .players-name`).style.color =
      '#fff';
    const boardContainer = document.querySelector(
      `${player.elementQuery}  .board-grid-container`
    );

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }

  populateBoard(firstPlayer, secondPlayer, playerSwitched = false) {
    if (firstPlayer.isActive) {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);

      if (firstPlayer.gameboard.isEditable) this.showEditMessage(firstPlayer);
    } else {
      this.populateActivePlayersBoard(secondPlayer);
      this.populateOpponentsBoard(firstPlayer);

      if (secondPlayer.type === 'real' && secondPlayer.gameboard.isEditable)
        this.showEditMessage(secondPlayer);
    }

    //request a 'pass device dialog' to be shown when the active player is switched if both players are real
    if (secondPlayer.type === 'real' && playerSwitched)
      this.showPassDeviceDialog(
        firstPlayer.isActive ? firstPlayer.name : secondPlayer.name
      );
    else if (secondPlayer.type === 'computer') editBoardDialog.close();
  }

  //displayed at end of the game
  showEndDialog(winner) {
    const endDialog = document.querySelector('.end-dialog');

    if (winner.type === 'computer') {
      document.querySelector('.end-dialog .message').textContent =
        'You lost. :/';
    } else {
      document.querySelector('.end-dialog .message').textContent =
        `Congratulations ${winner.name}, you won!`;
    }

    endDialog.showModal();
  }

  //shows game mode options
  showStartMenu() {
    const REAL_PLAYERS_GAME = 'start game with real players';
    const GAME_WITH_BOT = 'start game with a bot';

    const startDialog = document.querySelector('.start-dialog');
    startDialog.showModal();

    document
      .querySelector('.real-opponent-button')
      .addEventListener('click', () => {
        PubSub.publish(REAL_PLAYERS_GAME);

        startDialog.close();
      });

    document
      .querySelector('.game-with-bot-button')
      .addEventListener('click', () => {
        PubSub.publish(GAME_WITH_BOT);

        startDialog.close();
      });
  }

  //displayed when it's opponents turn to make a move
  showPassDeviceDialog(nextPlayerName) {
    const passDeviceDialog = document.querySelector('.pass-device-dialog');
    const nextPlayerNameButton = document.querySelector(
      '.pass-device-dialog button span'
    );
    const nextPlayerNameHeader = document.querySelector(
      '.pass-device-dialog h2 span'
    );
    const devicePassedButton = document.querySelector(
      '.pass-device-dialog button'
    );

    nextPlayerNameHeader.textContent = nextPlayerName.toUpperCase();
    nextPlayerNameButton.textContent = nextPlayerName.toUpperCase();
    passDeviceDialog.showModal();

    devicePassedButton.addEventListener('click', () => {
      passDeviceDialog.close();
    });
  }

  //displays a message that the player may move their ships around the board
  showEditMessage(player) {
    const editBoardDialogContainer = document.querySelector(
      '.edit-board-dialog-container'
    );

    editBoardDialogContainer.innerHTML = '';

    const message = document.createElement('p');
    message.textContent = 'You may move ships around the board now.';

    const doneButton = document.createElement('button');
    doneButton.textContent = 'DONE';
    editBoardDialogContainer.append(message, doneButton);

    editBoardDialog.show();
    doneButton.addEventListener('click', () => {
      editBoardDialog.close();
      player.gameboard.isEditable = false;

      PubSub.publish(NEXT_PLAYER);
    });
  }
}

//players' names may be edited at any time by clicking the name below the board
function setNameClickListeners() {
  const changeNameDialog = document.querySelector('.change-names-dialog');

  const playersNames = document.getElementsByClassName('players-name');

  for (const element of playersNames) {
    element.addEventListener('click', () => {
      changeNameDialog.showModal();
    });
  }

  const changeNameForm = document.querySelector('.change-names-dialog form');

  changeNameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    updateNames(
      document.querySelector('#first-name-input').value,
      document.querySelector('#second-name-input').value
    );

    changeNameForm.reset();
    changeNameDialog.close();
  });

  document.querySelector('.cancel-button').addEventListener('click', () => {
    changeNameDialog.close();
  });
}

//sends request to update the names
function updateNames(name1, name2) {
  const firstNamePlayerName = document.querySelector(
    '.first-player .players-name'
  );
  const secondNamePlayerName = document.querySelector(
    '.second-player .players-name'
  );

  firstNamePlayerName.textContent = name1.trim() === '' ? 'Player 1' : name1;
  secondNamePlayerName.textContent = name2.trim() === '' ? 'Player 2' : name2;

  const CHANGE_NAMES = 'change names';
  PubSub.publish(CHANGE_NAMES, [name1, name2]);
}

//shows dialog while bot is making a move
PubSub.subscribe(BOT_MOVE, () => {
  const botMoveDialog = document.querySelector('.bot-attack-dialog');
  botMoveDialog.showModal();

  setTimeout(() => botMoveDialog.close(), 600);
});
