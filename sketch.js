function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");
  angleMode(DEGREES);
}

function draw() {
    noFill();
    stroke(lerpColor(color("#c4a6de"), color("#a1db87"), frameCount / 120));
    translate(width / 2, height / 2);
    rotate(frameCount * 3);

  push();
    line(0,70,0, 0);
  pop();

  push();
    translate(0, 120);
    rect(-25, -25, 50, 50);
  pop();

  push();
    translate(0, 170);
    ellipse(0, 0, 20, 20);
  pop();

  push();
    translate(-30, 47);
    translate(0, 150);
    triangle(30, 0, 60, 47, 0, 47);
  pop();

  push();
    translate(0, 270);
    line(0,1000,0, 0);
  pop();

  if (frameCount == 120)
  {noLoop();}

}
