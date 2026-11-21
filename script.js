const secret = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
function isValidGuess(guess) {
    return VALID_GUESSES.has(guess.toLowerCase());
}

const ROWS = 6;
const COLS = 5;

const board = document.getElementById("board");
const tiles = [];

for (let r = 0; r < ROWS; r++) {
    const rowEl = document.createElement("div");
}

board.appendChild(rowEl);
tiles.push(rowTiles);