var h = []; 
var m = []; 
var s = []; 
var prev_sec; 
var prev_min; 
var prev_hour; 
var need2redraw = false; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
  background(255); 
  prev_hour = hour(); 
  prev_min = minute(); 
  prev_sec = second(); 
  fill(0); 
  for (var i=0; i <hour(); i++){
    var n = new Jitter("hour"); 
    h.push(n); 
    n.move(); 
    n.display(); 
  }

  for (var i=0; i <minute(); i++){
    var n = new Jitter("minute"); 
    m.push(n); 
    n.move(); 
    n.display(); 
  }

  // for (var i=0; i <second(); i++){
  //   var n = new Jitter("second"); 
  //   s.push(n); 
  //   n.move(); 
  //   n.display(); 
  // }
}

//this gets called every frame (about 60 frames per second)
function draw() { 
  background(255); 
  fill(0); 
  for (var i=0; i <hour(); i++){
    h[i].move(); 
    h[i].display(); 
  }

  for (var i=0; i <minute(); i++){
    m[i].move();
    m[i].display();  
  }

  // for (var i=0; i <second(); i++){
  //   s[i].move(); 
  //   s[i].display(); 
  // }

  if (prev_hour < hour()){
    var n = new Jitter("hour"); 
    h.push(n); 
  }else if(prev_hour > hour()){
    prev_hour = hour();
    need2redraw = true; 
  }

  if(prev_min < minute()){
    var n = new Jitter("minute"); 
    m.push(n); 
    prev_min = minute();
  }else if(prev_min > minute()){
    prev_min = minute(); 
    need2redraw = true; 
  }

  // if(prev_sec < second()){
  //   var n = new Jitter("second"); 
  //   s.push(n); 
  //   prev_sec = second();
  // } else if(prev_sec > second()){
  //   prev_sec = second(); 
  //   need2redraw = true; 
  // }

  if(need2redraw){
    redraw(); 
  }
}

// Jitter class
function Jitter(type) {
  this.x = random(width);
  this.y = random(height);
  if (type == "second"){
    this.diameter = random(1, 3);
    this.speed = 1;}
  else if (type == "minute"){
    this.diameter = random(5, 10);
    this.speed = 3;}
  else if (type == "hour"){
    this.diameter = random(55, 60);
    this.speed = 0.5;}

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    stroke(r,g,b); 
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function redraw() {
  h = []; 
  m = []; 
  s = []; 
  fill(0); 
  background(255); 
  for (var i=0; i <hour(); i++){
    var n = new Jitter("hour"); 
    h.push(n); 
    n.move(); 
    n.display(); 
  }

  for (var i=0; i <minute(); i++){
    var n = new Jitter("minute"); 
    m.push(n); 
    n.move(); 
    n.display(); 
  }

  // for (var i=0; i <second(); i++){
  //   var n = new Jitter("second"); 
  //   s.push(n); 
  //   n.move(); 
  //   n.display(); 
  // }
}