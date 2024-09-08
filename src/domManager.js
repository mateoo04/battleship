import style from './style.css';

const NEW_GAME = 'new game';

export class DOMManager {
  constructor() {
    setUpPlayAgainButton();
    setNameClickListeners();
    setUpResetButton();
  }

  populateActivePlayersBoard(player) {
    const board = player.gameboard.board;

    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

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
        } else if (board[i][j] !== null) {
          item.classList = 'ship';
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    let boardContainer = document.querySelector(player.elementQuery);

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }

  populateOpponentsBoard(player) {
    const board = player.gameboard.board;

    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        item.addEventListener('click', () => {
          player.gameboard.receiveAttack(i, j);
        });

        //remove else later, players shouldn't see each others boats
        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';

          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        } else if (board[i][j] !== null) {
          item.classList = 'ship';
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    let boardContainer = document.querySelector(player.elementQuery);

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }

  populateBoard(firstPlayer, secondPlayer) {
    if (firstPlayer.isActive) {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);
    } else {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);
    }
  }

  showEndDialog(winner) {
    const endDialog = document.querySelector('.end-dialog');
    console.log('win');

    if (winner.type === 'computer') {
      document.querySelector('.end-dialog .message').textContent =
        'You lose. :/';
    } else {
      document.querySelector('.end-dialog .message').textContent =
        'You won, congratulations!';
    }

    endDialog.showModal();
  }
}

function setUpPlayAgainButton() {
  const playAgainButton = document.querySelector('.play-again-button');

  playAgainButton.addEventListener('click', () => {
    PubSub.publish(NEW_GAME);

    document.querySelector('.end-dialog').close();
  });
}

function setNameClickListeners() {
  const changeNameDialog = document.querySelector('.change-names-dialog');

  const firstNamePlayerName = document.querySelector(
    '.first-player .players-name'
  );
  const secondNamePlayerName = document.querySelector(
    '.second-player .players-name'
  );

  firstNamePlayerName.addEventListener('click', () => {
    changeNameDialog.showModal();
  });

  secondNamePlayerName.addEventListener('click', () => {
    changeNameDialog.showModal();
  });

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

function setUpResetButton() {
  const resetButton = document.querySelector('.reset-button');

  resetButton.addEventListener('click', () => {
    PubSub.publish(NEW_GAME);
  });
}
