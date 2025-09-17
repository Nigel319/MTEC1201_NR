let col, col1, col2;

function setup(){
 createCanvas(windowWidth,windowHeight); 
 background(0,255,0);
 strokeWeight(10);
 frameRate(10);


}

function draw(){

  textAlign(CENTER);
  textSize(100);

  text(mouseIsPressed, 100, 50);


 col1 = color(100 + random(-10,10),200 + random(-10,10), 0 + random(-10,10));
 col2 = color(255+ random(-10,10), 10+ random(-10,10),50+ random(-10,10));

let i = map(mouseX,0,width,0,1)

 col = lerpColor(col1, col2,i)


 stroke(col);
 line(pmouseX, pmouseY,mouseX, mouseY);

 let d = winMouseY - pwinMouseY;

 circle(250, 250, d);
 circle(450, 450, d);

}


