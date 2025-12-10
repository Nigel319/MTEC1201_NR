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

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  
}

function draw(){
  background(255, 200, 0,10);

  orbitControl();
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