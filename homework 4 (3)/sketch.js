let redVal = 0;
let greenVal = 0 

let sunHeight = 600;
let sunX

function setup() {
  createCanvas(600,400, WEBGL);
  noStroke();

}



function draw() {
  background(redVal, greenVal, 0);

  let options = {
    disableTouchActions: false,
    freeRotation: true
  };

  orbitControl (1, 1 ,1, options);

  normalMaterial();

  fill(255, 135, 5, 60);
  circle(sunX, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(sunX, sunHeight, 140);

  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400)

//   if(sunHeight > 140){
//     sunHeight -= 2;
  
//   if(sunHeight > 480) {
//     redVal += 4;
//     greenVal += 1;
//   }
// }

greenVal = map( sin(frameCount/100),-1,1,0,255)
redVal = map( sin(frameCount/100),-1,1,0,255)

sunHeight = map( sin(frameCount/100),-1,1, height,0)
sunX = map( cos(frameCount/100),-1,1, width, width/2)


}