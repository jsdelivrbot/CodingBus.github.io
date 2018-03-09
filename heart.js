function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill((mouseX*mouseY)%255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
