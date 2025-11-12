let numRows = 20, numCols = 20;
let sliderX, sliderY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 
  sliderX = createSlider(1, 50, 20);
  sliderY = createSlider(1, 50, 20);

  sliderX.position(20, 20);
  sliderY.position(20, 50);
}

function draw() {
  background(220, 50);

  numCols = sliderX.value();
  numRows = sliderY.value();


  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  
  fill(255, 0, 0);
  noStroke();
  torus(numCols * 5, numRows * 2); 
}