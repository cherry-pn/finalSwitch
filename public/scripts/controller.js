// basic functionalities

var client;
var dt = new Date();
var topicInput = "barlas/fanswitch"
var payload = "the switch is on at level "
// btnPub.on("click", function () {
//   client.publish(topicInput.val(), payloadInput.val())
// })

$('#switch').on("click", function () {
  if ($('#switch').text() == "on") {
    $('#switch').text("off")
    console.log("disconnected")
    client.end();
  } else {
    client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
    console.log("Successfully connected");
    $('#switch').text("on")
  }

})

$('#one').click(function () {
  var finalLoad=payload +" 1" + " " + dt.toUTCString();
  client.publish(topicInput, finalLoad)
  console.log(finalLoad)
})
$('#two').click(function () {
  var finalLoad=payload +" 2" + " " + dt.toUTCString();
  client.publish(topicInput, finalLoad)
  console.log(finalLoad)
})
$('#three').click(function () {
  var finalLoad=payload +" 3" + " " + dt.toUTCString();
  client.publish(topicInput, finalLoad)
  console.log(finalLoad)
})





