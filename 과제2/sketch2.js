let hairColor;
let blushColor;
let eyeOffset = 0;

function setup() {
  createCanvas(600, 400);
  hairColor = color(40, 30, 20);
  blushColor = color(255, 150, 150, 120);
}

function draw(){
  background(220);

  fill(255);
  rect(60, 350, 280, 250, 40, 40, 0, 0);

  fill(0);
  rect(60, 350, 90, 300, 40, 0, 0, 0);
  triangle(150, 350, 150, 600, 200, 500);

  rect(250, 350, 90, 300, 0, 40, 0, 0);
  triangle(250, 350, 250, 600, 200, 500);

  noStroke();
  fill(255, 224, 189);
  triangle(150, 350, 250, 350, 200, 400);
  rect(150, 320, 100, 30);

  ellipse(200, 220, 180, 240);

  fill(255);
  ellipse(165, 200, 40, 25);
  ellipse(235, 200, 40, 25);

  stroke(0);
  strokeWeight(10);
  point(165 + eyeOffset, 200);
  point(235 + eyeOffset, 200);

  strokeWeight(3);
  line(200, 225, 190, 260);
  line(190, 260, 200, 270);

  strokeWeight(2);
  fill(220, 100, 100);
  arc(200, 290, 60, 25, 0, PI, CHORD);

  noStroke();
  fill(hairColor);
  arc(200, 180, 190, 200, PI, TWO_PI, CHORD);

  fill(200, 80, 80);
  ellipse(290, 150, 15, 30);

  fill(hairColor);
  ellipse(315, 180, 45, 90);

  fill(blushColor);
  ellipse(150, 260, 50, 30);
  ellipse(250, 260, 50, 30);
}
