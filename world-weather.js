// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;
var r = 15; 

var main = true; 
var city = 0; 

var topVal, bottomVal, leftVal, rightVal; 
var x1, y1, x2, y2, x3, y3; 

var weatherArray = []; 
var cityArray = []; 

var h1, s1, b1, h2, s2, b2, h3, s3, b3; 

function setup() {
  createCanvas(320, 568);
  background(231, 226, 224);
  stroke(212, 200, 186); 


  // pick three random cities 
  var lat1 = random(-80, 80); 
  var long1 = random(-170, 170); 
  var lat2 = random(-90, 90); 
  var long2 = random(-180, 180); 
  var lat3 = random(-90, 90); 
  var long3 = random(-180, 180); 

  // determine their relative locations 
  latArray = new Array(lat1, lat2, lat3); 
  longArray = new Array(long1, long2, long3); 
  bottomVal = min(latArray)-10; 
  topVal = max(latArray)+10; 
  leftVal = min(longArray)-10; 
  rightVal = max(longArray)+10; 

  // retrive weather data about the three locations 

  //var c2 = map(result2.currently.temperature, -40, 50, 0, 255); 
  //var c3 = map(result3.currently.temperature, -40, 50, 0, 255); 

  // map cities onto the canvas 
  y1 = map(lat1, bottomVal, topVal, 0, 568); 
  x1 = map(long1, leftVal, rightVal, 0, 320); 
   

  y2 = map(lat2, bottomVal, topVal, 0, 568); 
  x2 = map(long2, leftVal, rightVal, 0, 320);
  

  y3 = map(lat3, bottomVal, topVal, 0, 568); 
  x3 = map(long3, leftVal, rightVal, 0, 320);
  

  colorMode(HSB)
  query(lat1, long1); 
  query(lat2, long2); 
  query(lat3, long3);  
}

function mainDraw(){
  colorMode(RGB); 
  background(231, 226, 224);
  stroke(212, 200, 186); 
  line(0, y1, 320, y1); 
  line(x1, 0, x1, 568);
  line(0, y2, 320, y2); 
  line(x2, 0, x2, 568);
  line(0, y3, 320, y3); 
  line(x3, 0, x3, 568);

  colorMode(HSB); 
  var temp = weatherArray[0];  
  h1 = map(temp, -40, 122, 100, 360); 
  s1 = map(temp, -40, 122, 50, 100); 
  b1 = map(temp, -40, 122, 50, 100); 
  fill(h1, s1, b1); 
  ellipse(x1, y1, r); 

  temp = weatherArray[1]; 
  h2 = map(temp, -40, 122, 100, 360); 
  s2 = map(temp, -40, 122, 50, 100); 
  b2 = map(temp, -40, 122, 50, 100); 
  fill(h2, s2, b2); 
  ellipse(x2, y2, r); 

  temp = weatherArray[2]; 
  h3 = map(temp, -40, 122, 100, 360); 
  s3 = map(temp, -40, 122, 50, 100); 
  b3 = map(temp, -40, 122, 50, 100); 
  fill(h3, s3, b3); 
  ellipse(x3, y3, r);
}

function draw1(){
	background(h1, s1, b1); 
	var xPos = 20;  
    var yPos = 200;
  	var yGap = 60; 
  	var textSizeLarge = 40;
  	var textSizeSmall = 14;
  	stroke(255); 
  	fill(255); 

  	textSize(textSizeLarge);
  	text(str(cityArray[0]),20, yPos);
  	yPos+=yGap;

  	textSize(textSizeSmall);
  	text("Temperature",20, yPos);
  	yPos+=textSizeLarge;
  	textSize(textSizeLarge);
  	text(str(weatherArray[0]) + "º",20, yPos);
}

function draw2(){
	background(h2, s2, b2); 
	var xPos = 20;  
    var yPos = 200;
  	var yGap = 60; 
  	var textSizeLarge = 40;
  	var textSizeSmall = 14;
  	stroke(255); 
  	fill(255); 

  	textSize(textSizeLarge);
  	text(str(cityArray[1]),20, yPos);
  	yPos+=yGap;

  	yPos+=textSizeLarge;
  	textSize(textSizeLarge);
  	text(str(weatherArray[1]) + "º",20, yPos);
}

function draw3(){
	background(h3, s3, b3); 
	var xPos = 20;  
    var yPos = 200;
  	var yGap = 60; 
  	var textSizeLarge = 40;
  	var textSizeSmall = 14;
  	stroke(255); 
  	fill(255); 

  	textSize(textSizeLarge);
  	text(str(cityArray[2]),20, yPos);
  	yPos+=yGap;

  	yPos+=textSizeLarge;
  	textSize(textSizeLarge);
  	text(str(weatherArray[2]) + "º",20, yPos);
}

function draw() {
	//console.log(weatherArray); 
  if (main){
  	mainDraw(); 
  }
  else{
  	if (city == 1){
  		draw1(); 
  	}
  	else if (city == 2){
  		draw2(); 
  	}
  	else if (city == 3){
  		draw3(); 
  	}
  }
}


// Run the API call
function query(lat, long) {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/850a9ec4420c6e9224c91f7e9c0cf3fb/'+ str(lat) + ',' + str(long);

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}


// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  append(weatherArray, queryResult.currently.temperature); 
  append(cityArray, queryResult.timezone); 
}

function touchEnded() {
  if (main) {
    main = false; 
    var d1 = dist(mouseX, mouseY, x1, y1);
    var d2 = dist(mouseX, mouseY, x2, y2);
    var d3 = dist(mouseX, mouseY, x3, y3);

    if (d1 < r){
    	city = 1; 
    } else if (d2 < r){
    	city = 2; 
    }
    else if (d3 < r){
    	city = 3; 
    }
    else{
    	main = true; 
    }
  } else {
    main = true; 
  }
}