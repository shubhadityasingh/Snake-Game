import { getInputDirection } from "./input.js";

const snakeBody = [
    { x: 5, y: 20 },
    { x: 4, y: 20 },
    { x: 3, y: 20 },
    { x: 2, y: 20 },
    { x: 1, y: 20 },
];

export function updateSnake() {
  const inputDirection = getInputDirection();
  if(inputDirection.x === 0 && inputDirection.y === 0) return;
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
  gameBoard.innerHTML = "";
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.textContent = "S"
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake() {
    // snakeBody.push({x:snakeBody[snakeBody.length-1].x, y:snakeBody[snakeBody.length-1].y});
    snakeBody.push({...snakeBody[snakeBody.length-1]});
}

export function onSnake(position) {
    return snakeBody.some((segment) => {
        return (segment.x === position.x && segment.y === position.y)
    })
}


export function checkSnakeOutsideGrid() {
    let snakeHead = snakeBody[0];
    // console.log(snakeHead);
    if(snakeHead.x < 1 || snakeHead.x > 21 || snakeHead.y < 1 || snakeHead.y > 21) return true;
    else return false;
}

export function checkSnakeIntersection() {
    let snakeHead = snakeBody[0];
    return snakeBody.some((segment, index) => {
        if(index === 0) return false;
        return (snakeHead.x === segment.x && snakeHead.y === segment.y)
    });
}