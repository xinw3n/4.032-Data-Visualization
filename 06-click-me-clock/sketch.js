var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw
var counter = 0; 
var mouse = false; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
  background(255);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  if (mouse && counter < 30){
    counter ++; 
  }

  if (counter == 30){
    counter = 0; 
    mouse = false; 
    background(255); 
  }
}

function mousePressed(){
  background(255); 
  textSize(100);
  display = nf(hour()) + ":" + nf(minute()) + ":" + nf(second()); 
  text(display, 100, 250); 
  mouse = true; 
  counter = 0; 
}

  

