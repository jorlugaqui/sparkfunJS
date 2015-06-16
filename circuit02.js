// Curcuit 02 from http://cdn.sparkfun.com/datasheets/Kits/SFE-SIK-RedBoard-Guide-Version3.0-Online.pdf
// Reading from a potentiometer
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Middle pin connected on A0 input
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  board.repl.inject({
    pot: potentiometer
  });

  // LED connected to digital pin 13.
  var led = new five.Led(13);

  // Update freq of the blink (LED) with the middle pin input connected.
  potentiometer.on("change", function() {
    console.log(this.value, this.raw);
    led.blink(this.value);
  });
});
