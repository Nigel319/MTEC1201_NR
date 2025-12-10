class Relic {

  constructor(){
    this.xLoc = mouseX;
    this.yLoc = mouseY;
    this.xV = random(-5,5);
    this.yV = random(-5,5);
    this.relicCol = color(random(255), random(255), random(255));
    this.centerradius = random(20,70);
    this.rotations = 0 
    this.rV = random(-5,5);

  }

  drawRelic(){
    push();
    translate(this.xLoc, this.yLoc);
    rotate(this.rotations);

    fill(this.relicCol);
    ellipse(0, 0, this.centerradius * 2);

    pop();


  }

  moveRelic() {
    this.xLoc += this.xV;
    this.yLoc += this.yV;
    this.rotations += this.rV;

    //if (this.xLoc > width)  this.xLoc = 0;
    //if (this.xLoc < 0)      this.xLoc = width;
    //if (this.yLoc > height) this.yLoc = 0;
    //if (this.yLoc < 0)      this.yLoc = height;
  }
}

let relics = [];
let numRows = 20, numCols = 20;
let sliderX, sliderY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  sliderX = createSlider(1, 50, 20);
  sliderY = createSlider(1, 50, 20);
  sliderX.position(20, 20);
  sliderY.position(20, 50);

  
}

function draw(){
  background(255, 200, 0,10);

  numCols = sliderX.value();
  numRows = sliderY.value();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  if (numCols > 25) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 255);
  }

  noStroke();
  torus(numCols * 5, numRows * 2);

  orbitControl();
  shearX(45)
  torus(30, 15, 5, 3);

  for(let r of relics){
    r.moveRelic();
    r.drawRelic();
   // erase();

  }
}

function mouseDragged() {
  relics.push(new Relic());
}