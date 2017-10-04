$(document).ready(function() {

   var deviceOn = false;
   var gameStarted = false;
   var strictEnabled = false;
   var playerTurn = false;
   var buttonArray = ['red-button','green-button', 'blue-button', 'yellow-button'];
   var buttonHistoryArr =[];
   var currentIndex = 0;
   var count;
   var breakTimer;
   var playerWon = false;

 $("#on-off-slider").on("click", function(){

  //  alert("Game has started!");

  //  var gameStarted = $document.getElementById("#on-off-slider").checked;


    if(deviceOn == false) {
      //clear counter, clear buttonarray, disable all buttons/controls
      turnDeviceOn();
    }else {
      turnDeviceOff();
    }



 });

 $("#start-button").on("click", function(){
    if(deviceOn == true){

      count = 1;
     $("#count-box").html(count);
     buttonHistoryArr = [];
      gameStarted = true;
      computerTurn();

    }

 });

 $("#strict-button").on("click", function(){

    if(strictEnabled == false && deviceOn == true){

      $("#strict-LED").css("background-color", "red");
      strictEnabled = true;

    }else if(strictEnabled == true && deviceOn == true){

      $("#strict-LED").css("background-color", "black");
      strictEnabled = false;

    }



 });

 $("#red-button").on("click", function(){
   if(gameStarted == true && playerTurn == true && (buttonArray[0] == buttonHistoryArr[currentIndex] && ((currentIndex + 1) < buttonHistoryArr.length))){

     animateSingleButton(buttonArray[0]);
     currentIndex += 1;

  }else if (gameStarted == true && playerTurn == true && (buttonArray[0] == buttonHistoryArr[currentIndex] && ((currentIndex + 1) == buttonHistoryArr.length))){

      animateSingleButton(buttonArray[0]);
      checkForWin();

      if(playerWon == false){
        count += 1;
        $("#count-box").html(count);
        playerTurn = false;
        // breakTimer = setTimeout(function() {
        //   computerTurn();
        // }, 2000);

        setTimeout(function() {
          computerTurn();
        }, 2000);

    }

   }else if(gameStarted == true && playerTurn == true && strictEnabled == false && buttonArray[0] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       setTimeout(function() {
         animateButtonChain();
       }, 2000);

   }else if(gameStarted == true && playerTurn == true && strictEnabled == true && buttonArray[0] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       count = 1;
       $("#count-box").html(count);
       buttonHistoryArr = [];
       setTimeout(function() {
         computerTurn();
       }, 2000);
   }
 });

 $("#green-button").on("click", function(){
   if(gameStarted == true && playerTurn == true && (buttonArray[1] == buttonHistoryArr[currentIndex] && ((currentIndex + 1) < buttonHistoryArr.length))){

      animateSingleButton(buttonArray[1]);
      currentIndex += 1;

   }else if (gameStarted == true && playerTurn == true && (buttonArray[1] == buttonHistoryArr[currentIndex] && ((currentIndex + 1) == buttonHistoryArr.length))){

       animateSingleButton(buttonArray[1]);
       checkForWin();

       if(playerWon == false){
         count += 1;
         $("#count-box").html(count);
         playerTurn = false;
        setTimeout(function() {
          computerTurn();
        }, 2000);
      }

    }else if(gameStarted == true && playerTurn == true && strictEnabled == false && buttonArray[1] != buttonHistoryArr[currentIndex]){

    //  console.log("wrong button!");
       wrongButton();
       currentIndex = 0;
       setTimeout(function() {
         animateButtonChain();
       }, 2000);

     }else if(gameStarted == true && playerTurn == true && strictEnabled == true && buttonArray[1] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       count = 1;
       $("#count-box").html(count);
       buttonHistoryArr = [];
       setTimeout(function() {
         computerTurn();
       }, 2000);
   }
 });

 $("#blue-button").on("click", function(){
   if(gameStarted == true && playerTurn == true && (buttonArray[2] == buttonHistoryArr[currentIndex] && ((currentIndex + 1)  < buttonHistoryArr.length))){

      animateSingleButton(buttonArray[2]);
      currentIndex += 1;


   }else if (gameStarted == true && playerTurn == true && (buttonArray[2] == buttonHistoryArr[currentIndex] && ((currentIndex + 1)  == buttonHistoryArr.length))){

     animateSingleButton(buttonArray[2]);
     checkForWin();

     if(playerWon == false){
       count += 1;
       $("#count-box").html(count);
        playerTurn = false;
        setTimeout(function() {
          computerTurn();
        }, 2000);
      }

   }else if(gameStarted == true && playerTurn == true && strictEnabled == false && buttonArray[2] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       setTimeout(function() {
         animateButtonChain();
       }, 2000);

   }else if(gameStarted == true && playerTurn == true && strictEnabled == true && buttonArray[2] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       count = 1;
       $("#count-box").html(count);
       buttonHistoryArr = [];
       setTimeout(function() {
         computerTurn();
       }, 2000);
   }
 });

 $("#yellow-button").on("click", function(){
   if(gameStarted == true && playerTurn == true && (buttonArray[3] == buttonHistoryArr[currentIndex] && ((currentIndex + 1) < buttonHistoryArr.length))){

     animateSingleButton(buttonArray[3]);
     currentIndex += 1;

  }else if(gameStarted == true && playerTurn == true && (buttonArray[3] == buttonHistoryArr[currentIndex] && ((currentIndex + 1)  == buttonHistoryArr.length))){

      animateSingleButton(buttonArray[3]);
      checkForWin();

      if(playerWon == false){
        count += 1;
        $("#count-box").html(count);
        playerTurn = false;
        setTimeout(function() {
          computerTurn();
        }, 2000);
      }

   }else if(gameStarted == true && playerTurn == true && strictEnabled == false && buttonArray[3] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       setTimeout(function() {
         animateButtonChain();
       }, 2000);

   }else if(gameStarted == true && playerTurn == true && strictEnabled == true && buttonArray[3] != buttonHistoryArr[currentIndex]){

       wrongButton();
       currentIndex = 0;
       count = 1;
       $("#count-box").html(count);
       buttonHistoryArr = [];
       setTimeout(function() {
         computerTurn();
       }, 2000);

   }
 });

 $("#winButton").on("click", function(){

       buttonHistoryArr = [];
      //  count = 1;

       currentIndex = 0;
       $("#winModal").css("display","none");
       resetGame();
      //  setTimeout(function() {
      //    resetGame();
      //  }, 500);
 });


 function turnDeviceOn(){

   count = 0;
   $("#count-box").html("--");
   buttonHistoryArr = [];
   deviceOn = true;

 }

 function computerTurn(){
      // clearTimeout(breakTimer);
      // playerTurn = false;
      if(playerTurn == false && playerWon == false){
        currentIndex = 0;
        var randomNum = Math.floor(getRandom(0,4));
        var randomBtn = buttonArray[randomNum];
        // alert(randomBtn);
        buttonHistoryArr.push(randomBtn);
        // animateSingleButton(randomBtn);
        if(buttonHistoryArr.length < 2){
          animateSingleButton(randomBtn);
          playerTurn = true;
        }else {
          // console.log("Animate chain");
          animateButtonChain();
        }
    }

      // playerTurn = true;
      // console.log(buttonHistoryArr[currentIndex]);
 }

 function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

 function turnDeviceOff(){
   count = 0;
   $("#count-box").html("");
   $("#strict-LED").css("background-color", "black");
   strictEnabled = false;
   deviceOn = false;
   gameStarted = false;
 }

 function animateSingleButton(btn){
  //  $("#" + btn).fadeOut(100);
  //  $("#" + btn).fadeIn(500);
     var buttonColor = btn.substring(0, btn.indexOf('-'));

     $("#" + btn).fadeTo("slow", 0.5, function(){
      //  console.log("fade done");
      $( this ).css("opacity","1.0");
      // $( this ).fadeIn(500);
     });
    // var audio = new Audio("../sounds/blueSound.mp3");
    // var audio = new Audio("file:///C:/Users/kfw92_000/Desktop/website_projects/kentwalker.me/simon/sounds/" + buttonColor + "Sound.mp3");
    var audio = new Audio("sounds/" + buttonColor + "Sound.mp3");
    audio.play();
 }

 function animateButtonChain(){
    playerTurn = false;
    var displaySequence = function(){
    buttonHistoryArr.forEach(function(color, index){
        setTimeout(function(){
            animateSingleButton(color);
            // console.log("Animate 2");
        },
        1000 * index);
    })
    playerTurn = true;
  }

   displaySequence();
 }

 // function buttonDelay(){
 //
 //   setTimeout(function(){animateButtonChain();}, 2000);
 //
 // }
 //
 function resetGame(){

     count = 1;
     $("#count-box").html(count);
     playerTurn = false;
     playerWon = false;
     buttonHistoryArr = [];
     gameStarted = true;
     computerTurn();
 }

 function wrongButton() {
  //  var audio = new Audio("file:///C:/Users/kfw92_000/Desktop/website_projects/kentwalker.me/simon/sounds/fail.mp3");
   var audio = new Audio("sounds/fail.mp3");
   audio.play();
   $("#count-box").html("! !");
   setTimeout(function(){
      $("#count-box").html(count);
   }, 1000);
 }

 function checkForWin(){
    if(count == 20){
        // alert("Win!");
        // $("#count-box").css("text-align", "left");
        // $("#count-box").html("WIN");

        playerWon = true;
        $("#winModal").css("display","block");
        var audio = new Audio("sounds/win.mp3");

    }
 }

});
