let spaceship;
let shots = [];
let invaders = [];
let numInvaders = 70;

function setup() {
  createCanvas(800, 700);
  spaceship = new SpaceShip();
  for (let i = 0; i < Math.sqrt(numInvaders); i++) {
    for (let j = 0; j < Math.sqrt(numInvaders); j++) {
      invaders.push(new Invaders(i * 40 + 60, 60 + 40 * j));
    }
  }
}

function draw() {
  background(0);
  spaceship.show();
  textSize(16);
  text(`Score: ${spaceship.score}`, 10, 20);


  for (let i = shots.length - 1; i >= 0; i--) {
    shots[i].show();
    shots[i].update();
  }
  let edge = false;
  for (let i = invaders.length - 1; i >= 0; i--) {
    invaders[i].show();
        invaders[i].move();

        if (invaders[i].x > width || invaders[i].x < 0){
          edge = true;
        }
    for (let j = shots.length - 1; j >= 0; j--) {
      if (invaders[i].contact(shots[j])) {
        spaceship.scores();
        invaders.splice(i, 1);
        shots.splice(j, 1);
      }
    }
  }
  if (edge) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown();
    }
  }
  for (let i = shots.length - 1; i >= 0; i--) {
    if (shots[i].outScreen()) {
      shots.splice(i, 1);
    } 
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spaceship.left();
  } else if (keyCode === RIGHT_ARROW) {
    spaceship.right();
  }

  if (key == " ") {
    shots.push(spaceship.shoot());
  }
}