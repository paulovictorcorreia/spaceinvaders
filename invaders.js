class Invaders {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 15;
    
    this.toDelete = false;
    
    this.xdir = 1;
  }
  
  show() {
    noStroke();
    fill(255, 50, 50);
    circle(this.x,  this.y, this.radius*2);
  }
  
  contact(shoot){
    let d = dist(this.x, this.y, shoot.x, shoot.y);
    if (d < this.radius + shoot.r){
      // console.log(d);
      return true;
    }
    else{
      return false;
    } 
  }
  evaporate() {
    this.toDelete = true;
  }

  shiftDown(){
    this.xdir *= -1;
    this.y += this.radius;
  }

  move() {
    this.x = this.x + this.xdir;
  }

}