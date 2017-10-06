// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server


var queryResult; 

function setup() {
  createCanvas(320, 568);
  background(0);
  query(42.3601,-71.0589); 
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

  var currentWeather = queryResult.currently;
  var temp = currentWeather.temperature; 
  var h = map(temp, -40, 122, 120, 360); 
  var s = map(temp, -40, 122, 50, 100); 
  var b = map(temp, -40, 122, 50, 100); 
  
  // // a few variables for text formatting
  fill(h,s,b)
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 30;
  var textSizeSmall = 14;
  //var textSizeLocation = 25; 

  textSize(textSizeSmall);
  text("Your loved one is in",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(queryResult.timezone,20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("The weather there is",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.summary,20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("The temperature feels like",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.apparentTemperature,20, yPos);
  yPos+=yGap;

  rect(xPos, 450, 280, textSizeLarge+20)
  fill(0); 
  textSize(textSizeLarge);
  text("Text Them!", 80, 485); 

  

  // // List relevant items of information
  // fill(255);
  // textStyle(BOLD);

  // if(state==0){
  //   textSize(textSizeSmall);
  // text("Your loved one is in",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(queryResult.timezone,20, yPos);
  // yPos+=yGap;

  // textSize(textSizeSmall);
  // text("The weather there is",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.summary,20, yPos);
  // yPos+=yGap;

  // textSize(textSizeSmall);
  // text("The temperature feels like",20, yPos);
  // yPos+=textSizeLarge;
  // textSize(textSizeLarge);
  // text(currentWeather.apparentTemperature,20, yPos);
  // yPos+=yGap;

  // rect(xPos, 450, 280, textSizeLarge+20)
  // fill(0); 
  // textSize(textSizeLarge);
  // text("Text Them!", 80, 485); 

  // xPos = 20; 
  // yPos = 40; 
  // }

  // else if(state==1){
  //   fill(h,s,b); 
  //   text("Fall is here. Take care of yourself <3",20, yPos);
  // }

  

  
}

function touchEnded() {
  if (state == 0) {
    state = 1;
  } else {
    state = 0;
  }
}