var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw
var prev_sec; 
var prev_min; 
var prev_hour; 
var need2redraw = false; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  fill(255); 
  ellipse(250, 250, 300, 300); 
  ellipse(200, 240, 80, 80); 
  ellipse(300, 240, 80, 80); 

  var h = map(hour(), 0, 12, 25, -25); // Map the function hour() to values from 0 - 255 
  var m = map(minute(), 0, 60, 0, 2*PI); // Map the function minute() to values from 0 - 255
  var s = map(second(), 0, 60, 0, 2*PI); // Map the function second() to values from 0 - 255

  // draw left eye -- second 
  push(); 
  fill(0); 
  translate(200, 240); 
  rotate(s); 
  ellipse(30, 0, 20, 20); 
  pop(); 

  // draw right eye -- minute 
  push(); 
  fill(0); 
  translate(300, 240); 
  rotate(m); 
  ellipse(30, 0, 20, 20); 
  pop(); 

  // draw mouth -- hour 
  stroke(0); 
  bezier(200, 325, 225, 325+h, 275, 325+h, 300, 325)
}
  
  



  

