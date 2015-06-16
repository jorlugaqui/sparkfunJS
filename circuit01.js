// Curcuit 01 from http://cdn.sparkfun.com/datasheets/Kits/SFE-SIK-RedBoard-Guide-Version3.0-Online.pdf
// Blinkig an LED.
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led connected to digital pin 13.
  var led = new five.Led(13);
  // Blink every half of second.
  led.blink(500);
});
