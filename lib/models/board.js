class Board {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array.from({ length: size }, () => null));
        this.container = document.getElementById('board-container');
        this.createBoard();
    }

    createBoard() {
        for (let i = 0; i < this.size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < this.size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => this.handleClick(cell));
                row.appendChild(cell);
            }
            this.container.appendChild(row);
        }
    }

    handleClick(cell) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        if (this.isValidMove(row, col)) {
            const currentPlayer = this.isPlayerX() ? 'X' : 'O';
            this.makeMove(row, col, currentPlayer);
            this.updateBoard();
            if (this.checkWinner()) {
                this.showWinner();
            } else if (this.isFull()) {
                this.showDraw();
            } else {
                this.togglePlayer();
                if (!this.isPlayerX()) {
                    this.makeAIMove();
                    this.updateBoard();
                    if (this.checkWinner()) {
                        this.showWinner();
                    } else if (this.isFull()) {
                        this.showDraw();
                    }
                }
            }
        }
    }

    isValidMove(row, col) {
        return this.grid[row][col] === null;
    }

    makeMove(row, col, player) {
        this.grid[row][col] = player;
    }

    isFull() {
        return this.grid.every(row => row.every(cell => cell !== null));
    }

    isPlayerX() {
        return this.currentPlayer === 'X';
    }

    togglePlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    checkWinner() {
        // Add logic to check for a winner
    }

    makeAIMove() {
        // Add AI move logic (e.g., Minimax algorithm)
    }

    updateBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            cell.textContent = this.grid[row][col] || '';
        });
    }

    showWinner() {
        // Display winner message
    }

    showDraw() {
        // Display draw message
    }
}

// Usage:
const board = new Board(3); // Create a 3x3 board
