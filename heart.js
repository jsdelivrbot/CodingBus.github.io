var Cuties_Caps
function preload() {
  Cuties_Caps = loadFont("https://cdn.rawgit.com/CodingBus/CodingBus.github.io/3657d31b/CutiesCaps.otf")
}

function setup() {
	textFont(Cuties_Caps)
	createCanvas(displayWidth,displayHeight);
	background(100)
}
var x;
var y;
var sz = 50;
function draw() {
	fill(180,30,60);
	textSize(100);
	//textAlign(CENTER,CENTER)
	x = width/2;
	y = height/2;
	text('L',x,y);
	text('0',x+sz,y);
	text('v',x+sz*2,y);
	text('e',x+sz*3,y);
	text('uU',x+sz*4,y+sz*2);

}

