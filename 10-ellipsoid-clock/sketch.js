function setup() {
	createCanvas(500, 500, WEBGL);
}

function draw() {
  var h = map(hour(), 0, 24, 0, 250); // Map the function hour() to values from 0 - 255 
  var m = map(minute(), 0, 60, 0, 250); // Map the function minute() to values from 0 - 255
  var s = map(second(), 0, 60, 0, 250); // Map the function second() to values from 0 - 255
  background(200);
  ellipsoid(h, m, s);
}

