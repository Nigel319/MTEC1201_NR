let gridWidth = 30;
let gridHeight = 30;

let gameStarted = false;

let startingSegments = 10;

let xStart = 0;
let yStart = 15;

let startDirection = 'right';

let direction = startDirection;

let segments = [];

let score = 0;
let highScore;

let fruit;

function setup(){
  createCanvas (500,500);

  frameRate(10);

  textAlign(CENTER, CENTER);
  textSize(2);

  highScore = getItem('high score');

  describe ('A reproduction of the arcade game Snake, in which a snake, represented by a green line on a black background, is controlled by the arrow keys. Users move the snake toward a fruit, represented by a red dot, but the snake must not hit the sides of the window or itself'
    );
}

function draw() {
  background(0);

  scale(width / gridWidth, height / gridHeight);
  if (gameStarted === false) {
    showStartScreen();
  } else {


    translate(0.5, 0.5);
    showFruit();
    showSegments();
    updateSegments();
    checkForCollision();
    checkForFruit();
  }
}

function showStartScreen() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 10, 2);
  fill(255);
  text('Click to play.\nUse arrow keys to move.',
    gridWidth / 2,
    gridHeight / 2
  );
  noLoop(); 
}


