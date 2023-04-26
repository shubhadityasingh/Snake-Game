import { updateSnake, drawSnake, checkSnakeOutsideGrid, checkSnakeIntersection } from "./snake.js";
import { updateFood, drawFood } from "./food.js";

const gameBoard = document.getElementById('game-board');
export const gameBoardSize = 21;

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
    if(gameOver) {
        if(confirm("Game over. Click OK to play again.")) {
            window.location = '/';
        }
        return;
    }

    window.requestAnimationFrame(main);
    const timeSinceLastRender = currentTime - lastRenderTime;
    if(timeSinceLastRender < 500) return; // since we need to update it after every 500ms

    lastRenderTime = currentTime;

    updateBoard();
    drawBoard();
    checkGameOver();
}

window.requestAnimationFrame(main);

function updateBoard() {
    updateSnake();
    updateFood();
}

function drawBoard() {
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkGameOver() {
    if(checkSnakeOutsideGrid() || checkSnakeIntersection()) gameOver = true;
    else gameOver = false;
}