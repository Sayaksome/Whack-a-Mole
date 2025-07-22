let currMole;
let currPlant;
let score = 0;
let gameOver = false;
window.onload = function () {
  setGame();
};

function setGame() {
  //setting up the grid for game board in html
  for (let i = 0; i < 9; i++) {
    //<div id = "0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000); // called moles after every 1secs
  setInterval(setPlant, 1000); // called plants after every 1sec
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
function setMole() {
  if (gameOver) {
    return;
  }
  if (currMole) {
    currMole.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";
  let num = getRandomTile();
  if (currPlant && currPlant.id == num) {
    return;
  }
  currMole = document.getElementById(num);
  currMole.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlant) {
    currPlant.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";
  let num = getRandomTile();
  if (currMole && currMole.id == num) {
    return;
  }
  currPlant = document.getElementById(num);
  currPlant.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMole) {
    score += 10;
    document.getElementById("score").innerHTML = "SCORE: " + score.toString();
  } else if (this == currPlant) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
