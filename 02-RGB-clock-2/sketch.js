var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
	rectMode(CENTER);
}

//this gets called every frame (about 60 frames per second)
function draw() {

	var h = map(hour(), 0, 12, 0, 2*PI); // Map the function hour() to values from 0 - 255 
	var m = map(minute(), 0, 60, 0, 2*PI); // Map the function minute() to values from 0 - 255
	var s = map(second(), 0, 60, 0, 2*PI); // Map the function second() to values from 0 - 255

	background(240);

	// move the origin to the pivot point
	push(); 
	translate(height/2, width/2); 
	rotate(h);
	fill(255, 0, 0, 128);
	stroke(255, 0, 0, 128);
	ellipse(0, 0, hour()*5+160, hour()*5+80);
	pop(); 

	push(); 
	translate(height/2, width/2); 
	rotate(m);
	fill(0, 255, 0, 128);
	stroke(0, 255, 0, 128);
	ellipse(0, 0, minute()*2.5+40, minute()*2.5+160);
	pop(); 

	push(); 
	translate(height/2, width/2); 
	rotate(s);
	fill(0, 0, 255, 128);
	stroke(0, 0, 255, 128);
	ellipse(0, 0, second()*2.5+20, second()*2.5+320);
	pop(); 




	// draw three different shapes of ellipse representing hour, minute, and second 
	// push(); 
	// translate(250, 250); 
	// rotate(h); 
	// fill(255, 0, 0)  
	// rect(250, 250, 300, 200);
	// pop(); 

	// push(); 
	// translate(250, 250); 
	// rotate(m);
	// fill(0, 255, 0); 
	// rect(250, 250, 350, 100); 
	// pop(); 
	
	// push(); 
	// translate(250, 250); 
	// rotate(s);
	// fill(0, 0, 255); 
	// rect(250, 250, 400, 50); 
	// pop(); 
	
}