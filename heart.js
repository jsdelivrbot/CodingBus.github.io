function setup() {
  createCanvas(displayWidth, displayHeight);
  background(80,0,50);
  noStroke();
}
var x = 0;
function draw() {
  x++;
  fill(mouseX%255,20,mouseX%255+random(100),random(100,255));
  ellipse(mouseX, mouseY, x%60,x%60)
}
