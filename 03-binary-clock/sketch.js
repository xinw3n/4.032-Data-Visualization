var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(200);

  if(binary(second()) & 0x01 == 0){
    fill(0); 
  }
  else{
    fill(255)
  }
  rect(0, 0, 500/6, 500/3); 

  //fill the background with color value determined by h, m, s
  

}