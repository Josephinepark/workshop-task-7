let walkers = [];
let img;

function preload() {
  img = loadImage('wave.jpeg');
}

function mousePressed() {

  // get RGB value of clicked pixel [R,G,B,alpha]
  let walkerColor = img.get(mouseX, mouseY);

  // get red, green, blue values from array
  let walkerRed = walkerColor[0];
  let walkerGreen = walkerColor[1];
  let walkerBlue = walkerColor[2];

  // create 50 walkers in the clicked location
  for (let i = 0; i < 50; i++) {
    walkers.push(new Walker(mouseX, mouseY, walkerRed, walkerGreen, walkerBlue));
  }
}

function setup() {
  createCanvas(400, 400);
  img.resize(width, height);

  background(0);
  image(img, 0, 0);

  
  // for (let i = 0; i < 40; i++) {
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   let r = random(0, 255);
  //   let g = random(0, 255);
  //   let b = random(0, 255);
  //   walkers[i] = new Walker(x, y, r, g, b);
  // }

}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}

class Walker {

  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  step() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    strokeWeight(2);
    stroke(this.r, this.g, this.b);
    point(this.x, this.y);
  }
}
