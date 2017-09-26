var snitch; 
var win = false; 

function setup(){
  createCanvas(500, 500);
  snitch = new Snitch(); 
}

function draw(){
  background(250);
  if (win){
  	displayTime(); 
  }
  else{
  	snitch.move(); 
  	snitch.display(); 
  }
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, snitch.x, snitch.y);
  if (d < 20) {
    // Pick new random color values
    win = true; 
	snitch = new Snitch(); 
  }
  else{
  	win = false; 
  }
}

function Snitch() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = 20; 
  this.speed = 10; 

  this.move = function(){
  	this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
  	r = random(255);
    g = random(255);
    b = random(255);
    stroke(r,g,b);
    fill(r, g, b); 
    ellipse(this.x, this.y, this.diameter, this.diameter);} 
}

function displayTime() {
	background(255); 
    textSize(32);
	fill(200);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
}