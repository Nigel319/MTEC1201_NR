class Relic {

  constructor(){
    this.xLoc = mouseX;
    this.yLoc = mouseY;
    this.OrbitControl();
    this.xV = random(-5,5);
    this.yV = random(-5,5);
    this.relicCol = color(random(255), random(255), random(255))
    this.centerradius = random(20,70)
    this.rotations = 0 

  }

  drawRelic(){

    fill (this.relicCol)
    push()
    translate(this.xLoc,this.yLoc)

    rotate(this.rotations)


  }
}