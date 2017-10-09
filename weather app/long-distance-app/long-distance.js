// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;
var currentWeather; 
var result = []; 
var main = true; 

function setup() {
  createCanvas(320, 568);
  background(0);
  var lat = random(-80, 80); 
  var long = random(-170, 170); 
  
  query(lat, long); 
}

function mainDraw(){
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 30;
  var textSizeSmall = 14;

  textSize(textSizeSmall);
  text("Your loved one is in",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(str(result[0]),20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("The weather there is",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(str(result[2]),20, yPos);
  yPos+=yGap;
  
  textSize(textSizeSmall);
  text("It feels like",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(str(result[1]) + "º",20, yPos);
  yPos+=yGap; 

  rect(xPos, 450, 280, textSizeLarge+20)
  fill(0); 
  textSize(30);
  text("Text Your Love!", 45, 485);
}

function textMsg(){
  var xPos = 20;  
  var yGap = 60; 
  textSize(30);
  var size = 40; 

  if (result[1] < 30){
    var yPos = 200;
    text("It's getting cold!",20, yPos);
    yPos+=size;
    text("Stay warm!",20, yPos);
    yPos+=size;
    text("Miss you!",20, yPos);
  }
  else if (result[1] < 60){
    var yPos = 200;
    text("It's getting cool!",20, yPos);
    yPos+=size;
    text("Bring a jacket!",20, yPos);
    yPos+=size;
    text("Love you!",20, yPos);
  }
  else if (result[1] < 80){
    var yPos = 200;
    text("Enjoy the weather!",20, yPos);
    yPos+=size;
    text("Wish I'm there!",20, yPos);
    yPos+=size;
    text("Miss you!",20, yPos);
  }
  else{
    var yPos = 200;
    text("It's getting hot!",20, yPos);
    yPos+=size;
    text("Drink lots of water!",20, yPos);
    yPos+=size;
    text("Love you!",20, yPos);
  }
}

function draw(){
  background(0); 
  // only look at current results:

  // a few variables for text formatting
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 40;
  var textSizeSmall = 14;

  // List relevant items of information
  var temp = result[1]; 
  var h = map(temp, -40, 122, 120, 360); 
  var s = map(temp, -40, 122, 50, 100); 
  var b = map(temp, -40, 122, 50, 100);
  colorMode(HSB); 
  fill(h,s,b)
  textStyle(BOLD);

  // The location is not live data, just entered manually
  if (main){
    mainDraw(); 
  }
  else{
    textMsg(); 
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
  currentWeather = queryResult.currently;
  append(result, queryResult.timezone); 
  append(result, queryResult.currently.apparentTemperature); 
  append(result, queryResult.currently.summary); 
  
}

function touchEnded() {
  if (main) {
    if (mouseY > 450){
      main = false; 
    }
  } else {
    main = true; 
  }
}