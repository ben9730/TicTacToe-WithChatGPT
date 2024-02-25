// Define constants for player symbols
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Initialize variables
let currentPlayer = PLAYER_X;
let winner = null;
let board = ['', '', '', '', '', '', '', '', ''];

// Get all cell elements
const cells = document.querySelectorAll('.cell');

// Add click event listeners to cells
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        // Check if the cell is empty and there's no winner
        if (board[index] === '' && !winner) {
            // Update the board array and the cell's text content
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            
            // Check for a winner
            if (checkWinner()) {
                winner = currentPlayer;
                alert(`Player ${winner} wins!`);
            } else if (checkDraw()) {
                alert("It's a draw!");
            } else {
                // Switch players
                currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
            }
        }
    });
});

// Function to check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Function to check for a draw
function checkDraw() {
    return board.every(cell => cell !== '');
}

// Get the restart button element
const restartBtn = document.querySelector('.restart-btn');

// Add click event listener to restart button
restartBtn.addEventListener('click', () => {
    // Reset game state
    currentPlayer = PLAYER_X;
    winner = null;
    board = ['', '', '', '', '', '', '', '', ''];

    // Clear cell contents
    cells.forEach(cell => {
        cell.textContent = '';
    });
});
