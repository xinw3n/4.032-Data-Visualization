// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;
var r = 15; 

var topVal, bottomVal, leftVal, rightVal; 
var x1, y1, x2, y2, x3, y3; 

var weatherArray = []; 
colorArray = new Array(); 

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
  line(0, y1, 320, y1); 
  line(x1, 0, x1, 568); 

  y2 = map(lat2, bottomVal, topVal, 0, 568); 
  x2 = map(long2, leftVal, rightVal, 0, 320);
  line(0, y2, 320, y2); 
  line(x2, 0, x2, 568);

  y3 = map(lat3, bottomVal, topVal, 0, 568); 
  x3 = map(long3, leftVal, rightVal, 0, 320);
  line(0, y3, 320, y3); 
  line(x3, 0, x3, 568);

  colorMode(HSB)
  query(lat1, long1); 
  query(lat2, long2); 
  query(lat3, long3); 
  console.log(weatherArray); 
  var temp = weatherArray[0];  
  console.log(weatherArray[0])
  var h = map(temp, -40, 122, 120, 360); 
  var s = map(temp, -40, 122, 50, 100); 
  var b = map(temp, -40, 122, 50, 100); 
  fill(h, s, b); 
  ellipse(x1, y1, r); 
  ellipse(x2, y2, r); 
  ellipse(x3, y3, r); 

  

   

  

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

  
  // // a few variables for text formatting
  // var xPos = 20;  
  // var yPos = 40;
  // var yGap = 60; 
  // var textSizeLarge = 40;
  // var textSizeSmall = 14;

  // // List relevant items of information
  // fill(255);
  // textStyle(BOLD);

  // textSize(textSizeSmall);
  // text("Location",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(queryResult.timezone,20, yPos);
  // yPos+=yGap;

  // textSize(textSizeSmall);
  // text("Weather",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.summary,20, yPos);
  // yPos+=yGap;
  
  // textSize(textSizeSmall);
  // text("Temperature",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.temperature + "º",20, yPos);
  // yPos+=yGap;
  
  // textSize(textSizeSmall);
  // text("Precipitation",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.precipIntensity + "%",20, yPos);
  // yPos+=yGap;
  
  // textSize(textSizeSmall);
  // text("Humidity",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.humidity + "%",20, yPos);
  // yPos+=yGap;



}