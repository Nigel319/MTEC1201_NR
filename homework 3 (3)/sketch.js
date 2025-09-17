let col, col1, col2;

function setup(){
 createCanvas(windowWidth,windowHeight); 
 background(0);
 noStroke();
 strokeWeight(10)
 noFill()

 col1 = color("#851400");
 col2 = color("#00e2f2");

}

function draw(){


let x = mouseX+ random(50,-50)
let y = mouseY + random(-50,50);

let i = map(x,0,width,0,1)

 col = lerpColor(col1, col2,i)



 stroke(col);

 ellipse(x, y, 20);

 line(mouseX, 0, mouseX, 450);

 line(mouseY, 450, mouseX, 0);

}

function mousePressed(){
    background(0);   
    col1= color(random(255), random(255), random(255))
    col2= color(random(255), random(255), random(255))
}

function mouseDragged(){
}

function keyPressed(){
    background(255);  
}
