class Owl {

  construction () {
    this.xLoc 
    this.yLoc 
    this.rotation 
    this.obstacleXLocs = []
    this.obstacleYLocs = []
    this.obstacleDs = []
    this.numObstacles = 30

  }
}

function preload(){
  Owl = loadImage("mechanical.png")
  print(wasp);
  angleMode(DEGREES)

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  noFill()
  stroke(255)

}

for(let i = 0; i<numObstacles; i++){
  this.obstacleXLocs[i] = random(width)
  this.obstaclesYLocs[i] = random(height)
  this.obstacleDs[i] = random(10,100)
}

print(this.obstacleXLocs)

  this.xLoc = width/8
  this.yLoc = height/2
  this.rotation = 0


function draw(){
  background(50)

  for(let i = 0; i<numObstacles; i++){
    obstacle(this.obstacleXLocs[i], this.obstacleYLocs[i], this.obstacleDs[i])
  }
}

moveOwl()
displayOwl(this.xLoc, this.yLoc, this.rotation);

function obstacle(x, y, d){

  ellipse(x, y, d)

  if(dist(this.xLoc,yLoc,x,y) < d/2){

    background(255,100,0)
    textSize(30)
    fill(255)
    text("Danger, wasp!", width/2, 100)
    noFill()
  }

}

function moveOwl(){
  if(keyIsDown(RIGHT_ARROW) === true){
    this.xLoc+=4;
    this.rotation = 0 
  }
  if(keyIsDown(LEFT_ARROW) === true){
    this.xLoc-=4;
    this.rotation = 100
  }
  if(keyIsDown(UP_ARROW) === true){
    this.yLoc-=4;
    this.rotation = 90
  }
  if(keyIsDown(DOWN_ARROW) === true){
    this.yLoc+=4;
    this.rotation = 90
  }
}


