// var hour = createVector(250, 150); 
// var min = createVector(250, 300); 
// var sec = createVector(250, 450); 
// var origin = createVector(250, 0); 
var h_x = 250; 
var h_y = 150; 
var min_x = 250; 
var min_y = 250; 
var sec_x = 250; 
var sec_y = 250; 


//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
  background(255); 
  // line(origin.x, origin.y, hour.x, hour.y); 
  // line(hour.x, hour.y, min.x, min.y); 
  // line(min.x, min.y, sec.x, sec.y); 
}

//this gets called every frame (about 60 frames per second)
function draw() { 

  var h = map(hour(), 0, 24, 0, PI/3)-PI/6; // Map the function hour() to values from 0 - 255 
  var m = map(minute(), 0, 60, 0, PI/3)-PI/6; // Map the function minute() to values from 0 - 255
  var s = map(second(), 0, 60, 0, PI/3)-PI/6; // Map the function second() to values from 0 - 255

  h_x = 250+sin(h)*150; 
  h_y = 100+cos(h)*150; 

  min_x = 250+sin(m)*150; 
  min_y = 200+cos(m)*150; 

  sec_x = 250+sin(s)*150;
  sec_y = 300+cos(s)*150; 

  strokeWeight(5); 
  line(250,250, h_x, h_y); 
  line(h_x, h_y, min_x, min_y); 
  line(min_x, min_y, sec_x, sec_y); 
}

// When the user clicks the mouse
function mousePressed() {
  // Pick new random color values
  r = random(255);
  g = random(255);
  b = random(255);
  stroke(r, g, b); 
}

