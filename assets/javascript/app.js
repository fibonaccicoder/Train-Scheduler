$(document).ready(function(){

  // initialize firebase
  var config = {
    apiKey: "AIzaSyB3JxlIe7-EDammHzXz8Wh_ETjn69eYZ3g",
    authDomain: "rps-multiplayer-cd8e7.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-cd8e7.firebaseio.com",
    projectId: "rps-multiplayer-cd8e7",
    storageBucket: "rps-multiplayer-cd8e7.appspot.com",
    messagingSenderId: "729303309303"
  };

  firebase.initializeApp(config);

//initialize global variables

var database = firebase.database();

var trainName="";
var trainDest="";
var trainStart="";
var trainFrequency="";
var nextArrival="";
var minutesAway="";


// button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainStart = moment($("#first-train-input")).val().trim();
  var trainFrequency = $("#frequency-input").val().trim();


  // creates local object for holding data
  var newTrain = {
    name: trainName,
    destination: trainDest,
    start: trainStart,
    frequency: trainFrequency,
    minutesAway: minutesAway,
    nextArrival: nextArrival
  };

  // pushes object of new train info to database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // clears text box input
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});


//adds train to database and row to html after successful entry by user
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  // train Info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainStart);
  console.log(trainFrequency);

  
  
  var convertedTime = moment(firstTime, "HH:mm").subtract(1, "years");
  var currentTime = moment();
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  var remainder = diffTime % frequency;
  var minutesAway = frequency - remainder;
  var nextTrain = moment().add(minutesAway, "minutes");
  var nextArrival = moment(nextTrain).format("hh:mm a");


 //add updated train data to table

 database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var train = 0;

    // get reference to existing tbody element, create a new table row element
    var tBody = $("tBody");
    var tRow = $("<tr>");
    var child = data.val();

 //update text ad save reference in td
    var trainNameTd = $("<td>").text(child.trainName);
    var trainDestTd= $("<td>").text(child.trainDest);
    var trainStartTd = $("<td>").text(child.convertedTime);
    var trainFrequencyTd = $("<td>").text(child.trainFrequency);
    var nextArrivalTd = $("<td>").text(child.nextArrival);
    var minutesAwayTd = $("<td>").text(child.minutesAway);

    // append the newly created table data to the table row
    tRow.append(trainNameTd, trainDestTd, trainStarTd, trainFrequencyTd, nextArrival);
    // Append the table row to the table body
    tBody.append(tRow);

})
})