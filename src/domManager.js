import style from './style.css';

export class DOMManager {
  constructor(firstPlayer, secondPlayer) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;

    this.populateBoard(firstPlayer, secondPlayer);
  }

  populateActivePlayersBoard(player) {
    const board = player.gameboard.board;

    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        item.addEventListener('click', () => {
          player.gameboard.receiveAttack(i, j);
        });

        if (board[i][j] !== null && board[i][j] !== 'hit') {
          item.classList = 'ship';
        } else if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    let boardContainer = document.querySelector(
      '.first-player .board-grid-container'
    );

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
        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        }

        item.classList.add('board-item');

        boardGrid.appendChild(item);
      }
    }

    let boardContainer = document.querySelector(
      '.second-player .board-grid-container'
    );

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }

  populateBoard(activePlayer, opponent) {
    this.populateActivePlayersBoard(activePlayer);
    this.populateOpponentsBoard(opponent);
  }
}
