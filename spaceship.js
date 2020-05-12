class SpaceShip {

  constructor(){
    
    this.width = 15;
    this.height = 25;
    this.x = width / 2;
    this.y = height - this.height - 5;
    
    this.velocity = 10;
    
    this.score = 0;
    
  }
  
  show(){
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.width * 2, this.height * 2);
  }
  
  left() {
    this.x -= this.velocity;
  }
  
  right() {
    this.x += this.velocity;
  }
  
  edges(){
     if ((this.x + this.width >= width) || (this.x <= 0)){
       this.x = this.x;
     } 
  }
  
  shoot() {
    return new Shoots(this.x, this.y - this.height)
  }
  
  scores() {
    this.score++;
  }

}