class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
        this.timerInterval = null; // Variable to store timer interval
        this.timeLeft = 30; // Initial time for each move
        this.totalGamesPlayed = 0; // Total games played
        this.totalWins = { X: 0, O: 0 }; // Total wins for each player
        this.totalLosses = { X: 0, O: 0 }; // Total losses for each player
        this.currentWinStreak = { X: 0, O: 0 }; // Current win streak for each player
        this.longestWinStreak = { X: 0, O: 0 }; // Longest win streak for each player
    }

    // Function to start the timer
    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                // Handle time's up (e.g., end turn)
                console.log('Time\'s up!');
                this.promptContinue();
            } else {
                // Update timer display
                console.log(`Time left: ${this.timeLeft}`);
                if (this.timeLeft <= 5) {
                    // Play ticking sound effect during last 5 seconds
                    playTickSound();
                }
                this.timeLeft--;
            }
        }, 1000);
    }

    // Function to reset the timer
    resetTimer() {
        clearInterval(this.timerInterval);
        this.timeLeft = 30; // Reset time for each move
    }

    // Method to make a move
    makeMove(row, col) {
        if (this.board[row][col] === ' ') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.resetTimer(); // Reset timer after each move
            this.startTimer(); // Start timer for the next move
            return true;
        } else {
            return false; // Invalid move
        }
    }

    // Method to update game statistics after each game
    updateStatistics(winner) {
        this.totalGamesPlayed++;
        if (winner !== null) {
            this.totalWins[winner]++;
            this.currentWinStreak[winner]++;
            this.longestWinStreak[winner] = Math.max(this.longestWinStreak[winner], this.currentWinStreak[winner]);
            // Reset current win streak for the losing player
            const loser = winner === 'X' ? 'O' : 'X';
            this.currentWinStreak[loser] = 0;
            this.totalLosses[loser]++;
        }
    }

    // Method to check for a winner
    checkWinner() {
        // Add logic to check for a winner
        // Example: return 'X' or 'O' if a player wins, null if no winner yet, 'tie' if the game is a tie
    }

    // Method to prompt user to continue or leave after the game ends
    promptContinue() {
        const choice = prompt('The game has ended. Do you want to continue playing? (yes/no)');
        if (choice.toLowerCase() === 'yes') {
            // Reset the game and start a new one
            this.resetGame();
            this.startGame();
        } else {
            console.log('Thank you for playing! Goodbye.');
            // Optionally, you can add code here to gracefully exit the game
        }
    }

    // Method to reset the game
    resetGame() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
        this.resetTimer();
    }

    // Method to start the game
    startGame() {
        console.log('Starting new game...');
        this.startTimer();
        // Add more game initialization logic as needed
    }

    // Add more methods as needed
}

module.exports = TicTacToe;
class TicTacToe {
    constructor() {
        // Initialize game properties
        // ...
    }

    // Other methods here...

    // Method to prompt user to continue or leave after the game ends
    promptContinueOrLeave() {
        const choice = prompt('The game has ended. Do you want to continue playing? (yes/no)');
        if (choice.toLowerCase() === 'yes') {
            // Reset the game and start a new one
            this.resetGame();
            this.startGame();
        } else {
            console.log('Thank you for playing! Goodbye.');
            // Optionally, you can add code here to gracefully exit the game
        }
    }

    // Method to reset the game
    resetGame() {
        // Reset game properties
        // ...
    }

    // Method to start the game
    startGame() {
        console.log('Starting new game...');
        // Start game logic
        // ...
    }
}

// Usage example:
const game = new TicTacToe();
game.promptContinueOrLeave();
