let c1, c2;

function setup() {
  createCanvas(600, 400);
  c1 = color(0, 0, 255);
  c2 = color(10, 10, 50);
}

function draw() {
  let inter = map(sin(frameCount * 0.02), -1, 1, 0, 1);
  let skyColor = lerpColor(c1, c2, inter);
  background(skyColor);

  fill(50);
  rect(0, 250, 600, 150);

  fill(255);
  let offset = (frameCount * 3) % 100;
  for (let i = -1; i < 7; i++) {
    rect((i * 100) - offset, 280, 60, 80);
  }

  fill(200, 100, 100);
  rect(50, 120, 150, 130);

  fill(150, 50, 50);
  triangle(50, 120, 125, 70, 200, 120);

  let windowSize = map(sin(frameCount * 0.1), -1, 1, 20, 35);
  fill(255, 255, random(150, 255));

  let offsetW = (30 - windowSize) / 2;
  rect(70 + offsetW, 150 + offsetW, windowSize, windowSize);
  rect(110 + offsetW, 150 + offsetW, windowSize, windowSize);
  rect(150 + offsetW, 150 + offsetW, windowSize, windowSize);

  fill(100, 50, 0);
  rect(110, 190, 30, 60);

  fill(0);
  ellipse(120, 220, 10, 10);

  fill(80);
  rect(500, 100, 20, 200);

  fill(30);
  rect(470, 50, 80, 150);

  let redLight = (frameCount % 180 < 60) ? 255 : 50;
  let yellowLight = (frameCount % 180 >= 60 && frameCount % 180 < 120) ? 255 : 50;
  let greenLight = (frameCount % 180 >= 120) ? 255 : 50;

  fill(redLight, 0, 0);
  ellipse(510, 80, 40, 40);

  fill(yellowLight, yellowLight, 0);
  ellipse(510, 125, 40, 40);

  fill(0, greenLight, 0);
  ellipse(510, 170, 40, 40);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('choijiwon', 5);
  }
}
