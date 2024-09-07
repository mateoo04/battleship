import style from './style.css';

export class DOMManager {
  constructor(firstPlayer, secondPlayer) {
    this.firstPlayer = {
      playerData: firstPlayer,
      boardElement: document.querySelector(
        '.first-player .board-grid-container'
      ),
    };
    this.secondPlayer = {
      playerData: secondPlayer,
      boardElement: document.querySelector(
        '.second-player .board-grid-container'
      ),
    };

    this.populateBoard(firstPlayer);
    this.populateBoard(secondPlayer);
  }

  populateBoard(player) {
    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    const board = player.gameboard.board;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        item.addEventListener('click', () => {
          board.receiveAttack(i, j);
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

    let boardContainer;

    if (player === this.firstPlayer.playerData)
      boardContainer = this.firstPlayer.boardElement;
    else boardContainer = this.secondPlayer.boardElement;

    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }
}
