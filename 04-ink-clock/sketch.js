var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw
var prev_sec; 
var prev_min; 
var prev_hour; 
var need2redraw = false; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
  prev_hour = hour(); 
  prev_min = minute(); 
  prev_sec = second(); 
  fill(0); 
  for (var i=0; i <hour(); i++){
    var hc_x = random(500); 
    var hc_y = random(500); 
    ellipse(hc_x, hc_y, 60, 60); 
  }

  for (var i=0; i <minute(); i++){
    var mc_x = random(500); 
    var mc_y = random(500); 
    ellipse(mc_x, mc_y, 7.7, 7.7); 
  }

  for (var i=0; i <second(); i++){
    var sc_x = random(500); 
    var sc_y = random(500); 
    ellipse(sc_x, sc_y, 2, 2); 
  }
}

//this gets called every frame (about 60 frames per second)
function draw() {
  fill(0); 
  if (prev_hour < hour()){
    var hc_x = random(500); 
    var hc_y = random(500); 
    ellipse(hc_x, hc_y, 60, 60);
    prev_hour = hour(); 
  }else if(prev_hour > hour()){
    prev_hour = hour();
    need2redraw = true; 
  }

  if(prev_min < minute()){
    var mc_x = random(500); 
    var mc_y = random(500); 
    ellipse(mc_x, mc_y, 7.7, 7.7); 
    prev_min = minute(); 
  }else if(prev_min > minute()){
    prev_min = minute(); 
    need2redraw = true; 
  }

  if(prev_sec < second()){
    var sc_x = random(500); 
    var sc_y = random(500); 
    ellipse(sc_x, sc_y, 2, 2); 
    prev_sec = second(); 
  } else if(prev_sec > second()){
    prev_sec = second(); 
    need2redraw = true; 
  }

  if(need2redraw){
    redraw(); 
  }
}
  
  
function redraw() {
  background(255); 
  fill(0); 
  for (var i=0; i <hour(); i++){
    var hc_x = random(500); 
    var hc_y = random(500); 
    ellipse(hc_x, hc_y, 60, 60); 
  }

  for (var i=0; i <minute(); i++){
    var mc_x = random(500); 
    var mc_y = random(500); 
    ellipse(mc_x, mc_y, 7.7, 7.7); 
  }

  for (var i=0; i <second(); i++){
    var sc_x = random(500); 
    var sc_y = random(500); 
    ellipse(sc_x, sc_y, 2, 2); 
  }
}


  

