var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(255);
  //fill the background with color value determined by h, m, s
  for i in range(1,6){
  	int m = minute()>>i; 
  	if (m & 0x01 == 0x00){
  		fill(0); 
  	}
  	else if (m & 0x01 == 0x01){
  		fill(255); 
  	}
  	rect((i-1)*255/6, 0, 500/6, 500/6); 
  }
  	
  

}