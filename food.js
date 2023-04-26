import { onSnake, expandSnake } from "./snake.js";
import { gameBoardSize } from "./game.js";

let food = {x:10, y:10};

export function updateFood() {
    if(onSnake(food)) {
        expandSnake();
        food = updateFoodPosition();
    }
}

export function drawFood(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.textContent = "F";
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function updateFoodPosition() {
    let newFoodPos = generateRandomPosition();
    while(onSnake(newFoodPos)) newFoodPos = generateRandomPosition();
    return newFoodPos;
}


function generateRandomNumber(range) {
    return Math.floor(Math.random()*(range) + 1);
}

function generateRandomPosition() {
    return ({
        x: generateRandomNumber(gameBoardSize),
        y: generateRandomNumber(gameBoardSize)
    })
}