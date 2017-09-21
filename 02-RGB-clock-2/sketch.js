var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
	rectMode(CENTER);
}

//this gets called every frame (about 60 frames per second)
function draw() {
	background(255);

	var h = map(hour(), 0, 12, 0, 2*PI); // Map the function hour() to values from 0 - 255 
	var m = map(minute(), 0, 60, 0, 2*PI); // Map the function minute() to values from 0 - 255
	var s = map(second(), 0, 60, 0, 2*PI); // Map the function second() to values from 0 - 255

	// draw three different shapes of ellipse representing hour, minute, and second 
	push(); 
	translate(250, 250); 
	rotate(h); 
	fill(255, 0, 0)  
	rect(250, 250, 300, 200);
	pop(); 

	push(); 
	translate(250, 250); 
	rotate(m);
	fill(0, 255, 0); 
	rect(250, 250, 350, 100); 
	pop(); 
	
	push(); 
	translate(250, 250); 
	rotate(s);
	fill(0, 0, 255); 
	rect(250, 250, 400, 50); 
	pop(); 
	
}