var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  

  var h = map(hour(), 0, 24, 0, 255); // Map the function hour() to values from 0 - 255 
  var m = map(minute(), 0, 60, 0, 255); // Map the function minute() to values from 0 - 255
  var s = map(second(), 0, 60, 0, 255); // Map the function second() to values from 0 - 255

  //fill the background with color value determined by h, m, s
  background(h, m, s);
}