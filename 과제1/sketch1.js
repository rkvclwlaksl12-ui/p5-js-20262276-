function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0, 0, 255);
  fill(50);
  rect(0, 250, 600, 150);

  fill(200, 100, 100);
  rect(50, 120, 150, 130);

  fill(150, 50, 50);
  triangle(50, 120, 125, 70, 200, 120);

  fill(255);
  rect(70, 150, 30, 30);
  rect(110, 150, 30, 30);
  rect(150, 150, 30, 30);

  fill(100, 50, 0);
  rect(110, 190, 30, 60);

  fill(0);
  ellipse(120, 220, 10, 10);

  fill(255);
  rect(50, 280, 60, 80);
  rect(150, 280, 60, 80);
  rect(250, 280, 60, 80);
  rect(350, 280, 60, 80);
  rect(450, 280, 40, 80);

  fill(80);
  rect(500, 100, 20, 200);

  fill(30);
  rect(470, 50, 80, 150);

  fill(255, 0, 0);
  ellipse(510, 80, 40, 40);

  fill(255, 255, 0);
  ellipse(510, 125, 40, 40);

  fill(0, 255, 0);
  ellipse(510, 170, 40, 40);
}
