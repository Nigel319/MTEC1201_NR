let sunHeight;
let horizon = 200;

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  
  sunHeight = mouseY;

  if(sunHeight < horizon) {
    background("lightblue");
  } else {
    background(0);
  }

  fill("yellow");
  circle(200, sunHeight, 100);

  stroke("green");
  line(0, horizon, 400, horizon);
}