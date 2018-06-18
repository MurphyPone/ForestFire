var f;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  background(51, 61, 51);

  f = new Forest(width, height);
}

function draw() {
  f.show();
}
