var xPos = 0; // starting x position to draw
var yPos = 0;  // starting y position to draw
var pre_min; 
var pre_sec; 
var leftOpen = true; 
var rightOpen = true; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
  background(100);
  openLeft(); 
  openRight(); 
}

//this gets called every frame (about 60 frames per second)
function draw() {
  current_sec = second(); 
  current_min = minute(); 
  current_hour = hour()%12+1;
  if (current_sec != pre_sec){
    pre_sec = current_sec; 
    leftOpen = !(leftOpen); 
  }
  if (current_min != pre_min){
    pre_min = current_min; 
    rightOpen = !(rightOpen); 
  }

  background(255);
  if (leftOpen){
    openLeft();} 
  else{
    closeLeft();}
  if (rightOpen){
    openRight();}
  else{
    closeRight();}
  drawwrinkle(current_hour); 
}

function openLeft(){
  stroke(0);
  // eyebrow 
  strokeWeight(10); 
  bezier(40, 200, 100, 175, 140, 150, 215, 190); 
  strokeWeight(5); 
  bezier(60, 250, 110, 200, 160, 200, 210, 250); 
  bezier(65, 260, 110, 300, 140, 300, 205, 260); 
  ellipse(135, 248, 65, 65); 
  push(); 
  fill(0); 
  ellipse(136, 248, 30, 30); 
  pop(); 
}

function openRight(){
  // eyebrow 
  strokeWeight(10); 
  bezier(265, 200, 330, 175, 370, 150, 460, 190); 
  //eye 
  strokeWeight(5); 
  bezier(270, 250, 330, 200, 370, 200, 440, 250); 
  bezier(275, 260, 330, 300, 380, 300, 430, 260); 
  ellipse(350, 248, 65, 65); 
  push(); 
  fill(0); 
  ellipse(350, 248, 30, 30); 
  pop();
}

function closeLeft() {
  stroke(0);
  // eyebrow 
  strokeWeight(10); 
  bezier(40, 200, 100, 175, 140, 150, 215, 190); 
  //eye 
  strokeWeight(5); 
  bezier(65, 260, 110, 300, 140, 300, 205, 260); 
}

function closeRight() {
  // eyebrow 
  strokeWeight(10); 
  bezier(265, 200, 330, 175, 370, 150, 460, 190); 
  //eye 
  strokeWeight(5); 
  bezier(275, 260, 330, 300, 380, 300, 430, 260); 
}

  
function drawwrinkle(current_hour){
  strokeWeight(2); 
  if(current_hour >= 1){ 
    // left bottom 
    bezier(140, 305, 145, 305, 150, 300, 205, 270);}
  if(current_hour >= 2){
    // right bottom 
    bezier(273, 275, 285, 300, 300, 320, 355, 320);} 
 if(current_hour >= 3){ 
    // left bottom 
    bezier(130, 320, 140, 320, 150, 310, 205, 275);}
  if(current_hour >= 4){
    // right bottom 
    bezier(270, 265, 280, 285, 290, 305, 350, 305);}
  if(current_hour >= 5){ 
    // left 
    bezier(20, 230, 38, 235, 48, 248, 58, 248); }
  if(current_hour >= 6){
    // right 
    bezier(440, 248, 450, 250, 460, 250, 490, 230); }
 if(current_hour >= 7){ 
    // left 
    bezier(18, 235, 30, 245, 50, 246, 60, 248); } 
  if(current_hour >= 8){
    // right  
    bezier(440, 250, 450, 250, 460, 250, 485, 240); } 
  if(current_hour >= 9){ 
    // left 
    bezier(20, 260, 50, 255, 30, 255, 65, 255);} 
  if(current_hour >= 10){
    // right 
    bezier(440, 250, 450, 250, 460, 250, 493, 248); }  
 if(current_hour >= 11){ 
    // left 
    bezier(19, 270, 44, 265, 25, 263, 60, 260);} 
  if(current_hour >= 12){
    // right 
    bezier(430, 260, 450, 250, 460, 250, 490, 255);  }
  }

