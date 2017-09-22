function setup(){
  createCanvas(500, 500, WEBGL);
}

function draw(){
  background(200);
  rotateX(hour() * 0.1);
  rotateY(minute() * 0.1);
  rotateZ(second() * 0.1); 
  box(200, 200, 200);
}

