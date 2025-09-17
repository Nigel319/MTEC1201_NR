let col, col1, col2;

function setup(){ 
 createCanvas(windowWidth,windowHeight); 
 background(0);
 noStroke();
 strokeWeight(30)
//noFill()

 col1 = color("#1f3ca5ff");
 col2 = color("#7a1c4eff");

}

function draw(){
background(200);

let pmx = pmouseX - 50;
let pmy = pmouseY - 50;
let mx = mouseX - 50;
let my = mouseY- 50; 

let i = map(mouseX,0,width,0,1)

 col = lerpColor(col1, col2,i)

 stroke(col);
 line(pmouseX, pmouseY,mouseX, mouseY);

 if (mouseIsPressed === true) {
   fill(0);
 } else {
   fill(255);
 }

 square(200, 280, 200);


}


