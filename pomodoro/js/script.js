

$(document).ready(function() { //don't run anything until the website loads

var minutes = $("#sessionLength").val(); //get the session length value
var timeLeft = 0;
var breakVal = 0;
var clockStarted = false;
var paused = false;
var pomTimerId;
var breakStarted = false;

$("#displayMin").text(minutes); //set the minutes text field to
$("#displaySec").text(":00");

document.getElementById("sessionIncBtn").addEventListener("click", function(){



  var session = Number($("#sessionLength").val());

  if(clockStarted == false){

    session += 1;


  $("#sessionLength").val(session);
  $("#displayMin").text(session);

  }else{

    window.clearInterval(pomTimerId);
    paused = false;
    session += 1;
    $("#sessionLength").val(session);
    $("#displayMin").text(session);
    $("#displaySec").text(":00");
    clockStarted = false;
    $("#beginMsg").text("Click To Start");;
  }

});

document.getElementById("sessionDecBtn").addEventListener("click", function(){

  var session = Number(document.getElementById("sessionLength").value);

  if(session > 1 && clockStarted == false){

    session -= 1;
    $("#sessionLength").val(session);
    $("#displayMin").text(session);

  }else if(session == 1 && clockStarted == false){

    session = 1;
    $("#sessionLength").val(session);
   $("#displayMin").text(session);

  }else if(session == 1 && clockStarted == true){
    window.clearInterval(pomTimerId);
      session = 1;
    paused = false;
    $("#sessionLength").val(session);
    $("#displayMin").text(session);
    $("#displaySec").text(":00");
    clockStarted = false;
    $("#beginMsg").text("Click To Start");

  }
  else if(session > 1 && clockStarted == true){

    window.clearInterval(pomTimerId);
    paused = false;
    session -= 1;
    document.getElementById("sessionLength").value = session;
    $("#displayMin").text(session);
    $("#displaySec").text(":00");
    clockStarted = false;
    $("#beginMsg").text("Click To Start");
  }


});

document.getElementById("breakIncBtn").addEventListener("click", function(){

  var breakVal = Number(document.getElementById("breakLength").value);

  breakVal += 1;

  document.getElementById("breakLength").value = breakVal;

});

document.getElementById("breakDecBtn").addEventListener("click", function(){

   var breakVal = Number(document.getElementById("breakLength").value);

  if(breakVal > 1){
    breakVal -= 1;
  }else if(breakVal === 1){
    breakVal = 1;
  }

  document.getElementById("breakLength").value = breakVal;

});

document.getElementById("beginMsg").addEventListener("click", function(){

  var sessionTime = Number(document.getElementById("sessionLength").value);
  var breakTime = Number(document.getElementById("breakLength").value);

  if(clockStarted == false){

    timeLeft = eval(sessionTime * 60);
    breakVal = eval(breakTime * 60);


  }


  clockStarted = true;
  document.getElementById("beginMsg").innerHTML = "Click To Pause";

  if(paused == false){

    pomTimerId = window.setInterval(decrement, 1000);

  }else{

    window.clearInterval(pomTimerId);
    paused = false;
    document.getElementById("beginMsg").innerHTML = "Click To Start";
  }


});


  function decrement(){

    paused = true;

    var breakTime = Number(document.getElementById("breakLength").value);


    timeLeft--;

    if(timeLeft == -1 && breakStarted == false){

      window.clearInterval(pomTimerId);
      timeLeft = breakVal;
      pomTimerId = window.setInterval(decrement, 1000);
      breakStarted = true;
      $("#beginMsg").text("Break!");
      //document.getElementById("beginMsg").style.visibility = "visible";

    }else if(timeLeft == -1 && breakStarted == true){

      document.getElementById("beginMsg").innerHTML= "Click To Pause";
      breakStarted = false;
      window.clearInterval(pomTimerId);
      var newSessionTime = Number(document.getElementById("sessionLength").value);
      timeLeft = eval(newSessionTime * 60);
      pomTimerId = window.setInterval(decrement, 1000);

    }else{

      document.getElementById("beginMsg").innerHTML = "Click To Pause";
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft - (minutes * 60);

      if(minutes < 10){
        minutes = "0" + minutes;
      }
      if(seconds < 10){
        seconds = "0" + seconds;
      }
      $("#displayMin").text(minutes);
      $("#displaySec").text(":" + seconds);

    }

  }

  document.getElementById("resetBtn").addEventListener("click", function(){

    var session = document.getElementById("sessionLength").value;

      window.clearInterval(pomTimerId);
    paused = false;

    $("#sessionLength").val(session);
    $("#displayMin").text(session);
    $("#displaySec").text(":00");
    clockStarted = false;
  });

});
