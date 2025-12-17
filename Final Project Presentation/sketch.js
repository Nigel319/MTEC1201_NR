class Relic {

  constructor(){
    this.xLoc = mouseX - width / 2;
    this.yLoc = mouseY - height / 2;
    this.zLoc = random(-300,300);
    this.xV = random(-5,5);
    this.yV = random(-5,5);
    this.zV = random(-3,3);
    this.relicCol = color(random(255), random(255), random(255));
    this.centerradius = random(20,70);
    this.rotations = 0 
    this.rV = random(-5,5);
    this.pulseOffset = random(360);

  }

  drawRelic(){
    push();
    translate(this.xLoc, this.yLoc, this.zLoc);
    rotate(this.rotations);

    let pulse = 1 + sin(frameCount * 2 + this.pulseOffset) * 0.6;
    scale(pulse);

    fill(this.relicCol);
    noStroke();
    torus(this.centerradius, this.centerradius / 3);

    pop();


  }

  moveRelic() {
    this.xLoc += this.xV;
    this.yLoc += this.yV;
    this.zLoc += this.zV;
    this.rotations += this.rV;

    //if (this.xLoc > width)  this.xLoc = 0;
    //if (this.xLoc < 0)      this.xLoc = width;
    //if (this.yLoc > height) this.yLoc = 0;
    //if (this.yLoc < 0)      this.yLoc = height;
  }
}

class Orb {

  constructor(x ,y, z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = random(10, 30);
    this.col = color(random(255), random(255), random(255));
  }

  draw() {
    push();
    translate(this.x, this.y, this.z);
    fill(this.col);
    noStroke();
    sphere(this.size);
    pop();
  }
}

let relics = [];
let spheres = [];
let centerRot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  
}

function draw(){
  background(255, 200, 0, 50);

  ambientLight(80)
  pointLight(
    255, 255, 255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  orbitControl();

  push();
  translate(0,0,0);
  rotateY(centerRot);
  rotateX(centerRot * 0.6);
  noStroke();
  fill(255);
  torus(30, 15, 5, 3);
  pop();

  centerRot += 1;
 

  for(let r of relics){
    r.moveRelic();
    r.drawRelic();
   // erase();

  for (let s of spheres){
    s.draw();
  }

  }
}

function mouseDragged() {
  relics.push(new Relic());
}

function keyPressed() {
  spheres.push(new Orb(
    random(-width/2, width/2),
    random(-height/2, height/2),
    random(-300,300)
  ));
}