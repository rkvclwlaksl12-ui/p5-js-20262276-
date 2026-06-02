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

  let tx = mouseX;
  let ty = mouseY - 40;

  noStroke();
  fill(30, 120, 60);
  triangle(tx, ty, tx - 20, ty + 30, tx + 20, ty + 30);
  triangle(tx, ty - 25, tx - 15, ty + 5, tx + 15, ty + 5);
  triangle(tx, ty - 45, tx - 10, ty - 20, tx + 10, ty - 20);

  fill(100, 70, 40);
  rect(tx - 5, ty + 30, 10, 20);

  fill(255, 204, 0);
  triangle(270, 410, 320, 410, 295, 460);

  fill(0);
  ellipse(295, 430, 10, 20);
}

function keyPressed() {
  if(key === 'H' || key === 'h') {
    hairColor = color(random(255), random(255), random(255));
  }
  if(key === 'B' || key === 'b') {
    blushColor = color(random(200, 255), random(80, 160), random(100, 180), 120);
  }
  if(keyCode === LEFT_ARROW) {
    eyeOffset = -5;
  }
  if(keyCode === RIGHT_ARROW){
    eyeOffset = 5;
  }
  if (key === 's') {
    saveGif('mySketch', 8);
  }
}
