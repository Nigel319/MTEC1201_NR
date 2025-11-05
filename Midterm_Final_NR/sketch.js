// The snake moves along this grid
let gridWidth = 50;
let gridHeight = 50;

let gameStarted = false;

//This will be how many segments the snake starts with 10
let startingSegments = 10;

let xStart = 0;
let yStart = 15;

//This is the steup for which direction it starts
let startDirection = 'right';

//The direction of the start
let direction = startDirection;

//The snake is divided into segments 
let segments = [];

let score = 0;
let highScore;

let fruit;

function setup(){
  createCanvas (windowWidth, windowHeight);

  //Sets frame rate fro movenment speed here
  frameRate(10);

  textAlign(CENTER, CENTER);
  textSize(2);

//Chckes high score in local browser storage
//If nothing is founf it will be undifined
  highScore = getItem('high score');

  describe ('A reproduction of the arcade game Snake, in which a snake, represented by a green line on a black background, is controlled by the arrow keys. Users move the snake toward a fruit, represented by a red dot, but the snake must not hit the sides of the window or itself.'
    );
}

function draw() {
  background(255, 204, 0);

  //This is set so game grid fills the canvas
  scale(width / gridWidth, height / gridHeight);
  if (gameStarted === false) {
    showStartScreen();
  } else {


    //Shift over so that the snake and fruit stay on screen
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

function mousePressed() {
  if (gameStarted === false) {
    startGame();
  }
}

function startGame() {
//Puts fruit in a random place 
  updateFruitCoordinates();

  segments = [];

  //Start with x at the starting point and repeat
  //Segments have been creating increasing x by 1
  for (let x = xStart; x < xStart + startingSegments; x += 1) {
    let segmentPosition = createVector(x, yStart);
    segments.unshift(segmentPosition);
  }

  direction = startDirection;
  score = 0 
  gameStarted = true;
  loop();

}

function showFruit(){
  stroke(56, 105, 207);
  point(fruit.x, fruit.y);
}

function showSegments() {
  noFill();
  stroke(96, 255, 64);
  beginShape();
  for (let segment of segments) {
    vertex(segment.x, segment.y);
  }
  endShape();
}

function updateSegments() {
  segments.pop();
  let head = segments[0].copy();

//Inserts the new snake head to the beginning of the array
  segments.unshift(head);

//This makes an adjustment of the heads position based on the current direction
  switch (direction) {
    case 'right':
      head.x = head.x + 1;
      break;
   case 'up':
    head.y = head.y - 1;
    break;
   case 'left':
    head.x = head.x - 1;
    break;
   case 'down':
    head.y = head.y + 1;
    break;     
  }
}

function checkForCollision() {
  let head = segments[0];

  //This happens if 
  if (
  //hit right edge
    head.x >= gridWidth ||
  //hit left edge
    head.x < 0 ||
  //hit bottom edge
    head.y >= gridHeight ||
  //hit top edge
    head.y < 0 ||
  //collid with itself
    selfColliding() === true
  ) {
  //Will show a gameover screen
    gameOver();
  }
}

function gameOver() {
  noStroke();
  fill (32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 12, 2);
  fill(255);

//Sets highscore to which ever is the largest score
  highScore = max(score, highScore);

//This put highscore in local storage, The local storage is stored in the browser
  storeItem('high score', highScore);
  text(
    `Game over!
Your score: ${score}
High score: ${highScore}
Click to play again` ,
    gridWidth / 2,
    gridHeight / 2
  );
  gameStarted = false;
  noLoop();
}

function selfColliding() {
//Stores the last segment as the head
  let head = segments[0];

//Store every segment except the first one
  let segmentsAfterHead = 
segments.slice(1);

//Checks each of the other segments
for (let segment of segmentsAfterHead) {
//This is if they are in the same place as the head
  if (segment.equals(head) === true) {

   }
 }
 return false;
}

function checkForFruit() {


//Store first segment as head 
  let head = segments[0];


//If the head segment is in the same place as the fruit

  if (head.equals(fruit) === true) {

    background(random(255), random(255), random(255));
    print('eatsfruit')

//Give a point to the player
    score = score + 1;

//Duplicate the tail 
    let tail = segments [segments.length - 1];
    let newSegment = tail.copy();

//Put this duplicate in the beginning of array
    segments.push(newSegment);

//Puts fruit in a new location
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() { 

//Picks random coordinate for the fruit
  let x = floor(random(gridWidth));
  let y = floor(random(gridHeight));
  fruit = createVector(x,y);
}

//Pressed arrow key changes the direction of snake direction
//If the snake if moving in the opposite direction it will do nothing
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if ( direction !== 'right') {
        direction = 'left' ;
      }
      break;
    case RIGHT_ARROW:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case UP_ARROW:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case DOWN_ARROW:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}

//https://p5js.org/examples/games-snake
//Snake by p5.js Contributors and the Processing Foundation is licensed under CC BY-NC-SA 4.0.

