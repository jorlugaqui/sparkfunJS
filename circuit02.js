var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  board.repl.inject({
    pot: potentiometer
  });

  var led = new five.Led(13);

  potentiometer.on("change", function() {
    console.log(this.value, this.raw);
    led.blink(this.value);
  });
});
