//Nigel R 
//Name: Above As Below
//concept i want to explore for the semester is just getting creative with a bit of 3D art in coding using p5.js. Moving 3D objects like this would be so cool for a easy graphic website I think with art that i do at home to make a website that's just as artistic would be great !





function setup() {
  createCanvas(1000, 800,WEBGL);
  background('rgba(161, 242, 161, 1)');
}

function draw() {
  background('rgba(161, 242, 161, 1)');

  rotateY(frameCount * 0.01);

  quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);

  rotateY(frameCount * 0.01);

  stroke('red');
  strokeWeight(10);

  point(-20, -30, 0);

  ellipse(100, 0, -50);

  ellipse(180, 0, 100);

  ellipse(-100, 0, 50);

  ellipse(-180, 0, -100);

  square(150, 50, 100);

  square(-150, -50, -100);
}
