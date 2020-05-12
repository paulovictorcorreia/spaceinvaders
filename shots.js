class Shoots {
  constructor(shipPositionX, shipPositionY) {
    this.x = shipPositionX;
    this.y = shipPositionY;
    this.r = 5;

    this.toDelete = false;

  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  update() {
    this.y -= 5;
  }

  outScreen() {
    if (this.y < 0) {
      return true;
    } else {
      return false;
    }


  }
  hits() {
    this.toDelete = true;
  }


}