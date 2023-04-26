let inputDirection = { x: 0, y: 0 };
let lastDirection = { x: 0, y: 0 };

let startGame = false;

window.addEventListener("keydown", (e) => {
    if(startGame === false) {
        startGame = true;
        inputDirection.x = 1;
        inputDirection.y = 0;
        return;
    }
  switch (e.key) {
    case "ArrowUp":
      if (lastDirection.y !== 0) break;
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;
    case "ArrowDown":
      if (lastDirection.y !== 0) break;
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;
    case "ArrowLeft":
      if (lastDirection.x !== 0) break;
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case "ArrowRight":
      if (lastDirection.x !== 0) break;
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
  }
});

export function getInputDirection() {
  lastDirection = inputDirection;
  return inputDirection;
}
