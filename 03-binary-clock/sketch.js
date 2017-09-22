var powerofTwo = [32, 16, 8, 4, 2, 1]; 

//this gets called only once in the very beginning
function setup() {
	createCanvas(500,500);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(200);
  var rep_sec = findBinaryRep(second()); 
  for (var i=0; i<6; i++){
    push(); 
    if (rep_sec[i]==1){
      fill(255); 
      rect(i*500/6.0, 0, 500/6.0, 500/3.0); 
    }
    else{
      fill(0); 
      rect(i*500/6.0, 0, 500/6.0, 500/3.0); 
    }
    pop(); 
  }

  var rep_min = findBinaryRep(minute()); 
  for (var i=0; i<6; i++){
    push(); 
    if (rep_min[i]==1){
      fill(255); 
    }
    else{
      fill(0); 
    }
    rect(i*500/6.0, 500/3.0, 500/6.0, 500/3.0);
    pop(); 
    
  }  

  var rep_hour = findBinaryRep(hour()); 
  for (var i=0; i<6; i++){
    push(); 
    if (rep_hour[i]==1){
      fill(255); 
      rect(i*500/6.0, 1000/3.0, 500/6.0, 500/3.0); 
    }
    else{
      fill(0); 
      rect(i*500/6.0, 1000/3.0, 500/6.0, 500/3.0); 
    }
    pop(); 
  }  
}

function findBinaryRep(num) {
  var rep = []; 
  var remainder = 0; 
  var ratio = 0; 
  temp = num; 
  for (var i=0; i < 6; i++){
    if(temp > powerofTwo[i]){
      ratio = 1; 
    }
    else{
      ratio = 0; 
    }
    remainder = temp%powerofTwo[i]; 
    rep.push(ratio); 
    temp = remainder; 
  }
  return rep; 
}