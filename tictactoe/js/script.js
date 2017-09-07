$(document).ready(function() {



  var humPlayer;
  var aiPlayer;
  var currentPlayer;
  var emptyArray = false;
  var aiWinMove;
  var aiWinOpp = false;
  var playerWinOpp = false;
  var playerWins = false;
  var playerWinRow;
  var aiWins = false;
  var aiWinRow;
  var aiBlockMove;
  var oneSpaceRow;
  var humSpaces = [];  //array to track spaces that the player picks
    // array to track spaces that the computer picks


  humSpaces[0] = new Array();  //create inner arrays for winning rows which will be populated when the player or computer picks a space
  humSpaces[1] = new Array();
  humSpaces[2] = new Array();
  humSpaces[3] = new Array();
  humSpaces[4] = new Array();
  humSpaces[5] = new Array();
  humSpaces[6] = new Array();
  humSpaces[7] = new Array();



 var aiSpaces = [[1,2,3], [4,5,6],[7,8,9], [1,4,7],[2,5,8], [3,6,9], [1,5,9], [3,5,7]];
 var winArr = [[1,2,3], [4,5,6],[7,8,9], [1,4,7],[2,5,8], [3,6,9], [1,5,9], [3,5,7]];

  var mainArr = [1,2,3,4,5,6,7,8,9];




  $("#xbutton").on("click", function(){



    //document.getElementById("xbutton").style.visibility = "hidden";
    //document.getElementById("obutton").style.visibility = "hidden";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("obutton").disabled = true;
    document.getElementById("xbutton").disabled = true;

    humPlayer = 'X';
    aiPlayer = 'O';

    for(var i = 1; i < 10; i++){
    document.getElementById("space"+i).disabled = false;
  }

    currentPlayer = 1;  //current player is 1 which is the computer, 0 is the player

    aiMove();

  });

   $("obutton").on("click", function(){



        document.getElementById("myModal").style.display = "none";

     document.getElementById("obutton").disabled = true;
    document.getElementById("xbutton").disabled = true;

     humPlayer = 'O';
     aiPlayer = 'X';

     for(var i = 1; i < 10; i++){
    document.getElementById("space"+i).disabled = false;
  }

     currentPlayer = 1;
    aiMove();


  });

  // document.getElementById("space10").addEventListener("click", function(){
  //       alert("Clicked Space 10");
  // });



  $("#space1").on("click", function(){

    // alert("Space 1 Click!");
    $("#space1").text(humPlayer);



    mainArr.splice(mainArr.indexOf(1),1);



      humSpaces[0][0] = 1;
      humSpaces[3][0] = 1;
      humSpaces[6][0] = 1;


      document.getElementById("space1").disabled = true;

      checkScore();

    currentPlayer = 1;

    if(playerWins == false){

      window.setTimeout(aiMove,1000);

    }


  });


  $("#space2").on("click", function(){

   $("#space2").text(humPlayer);

    mainArr.splice(mainArr.indexOf(2),1);

     humSpaces[0][1] = 2;
     humSpaces[4][0] = 2;


    document.getElementById("space2").disabled = true;
    checkScore();
    currentPlayer = 1;

    if(playerWins == false){

      window.setTimeout(aiMove,1000);

    }

  });

  $("#space3").on("click", function(){

    $("#space3").text(humPlayer);
    mainArr.splice(mainArr.indexOf(3),1);


     humSpaces[0][2] = 3;
     humSpaces[5][0] = 3;
     humSpaces[7][0] = 3;


    document.getElementById("space3").disabled = true;
     checkScore();
     currentPlayer = 1;

    if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }


  });

  $("#space4").on("click", function(){


    $("#space4").text(humPlayer);
    mainArr.splice(mainArr.indexOf(4),1);


     humSpaces[1][0] = 4;
     humSpaces[3][1] = 4;



document.getElementById("space4").disabled = true;
      checkScore();

    currentPlayer = 1;

   if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }


  });

  $("#space5").on("click", function(){

    $("#space5").text(humPlayer);
    mainArr.splice(mainArr.indexOf(5),1);


     humSpaces[1][1] = 5;
     humSpaces[4][1] = 5;
     humSpaces[6][1] = 5;
     humSpaces[7][1] = 5;


    document.getElementById("space5").disabled = true;
     checkScore();

    currentPlayer = 1;

    if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }
   // }

  });

  $("#space6").on("click", function(){

   //if(currentPlayer == 0){

    $("#space6").text(humPlayer);
    mainArr.splice(mainArr.indexOf(6),1);



    humSpaces[1][2] = 6;
    humSpaces[5][1] = 6;


    //console.log("Main array " + mainArr);
    document.getElementById("space6").disabled = true;
    checkScore();
    //checkDraw();
    currentPlayer = 1;
    if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }
  // }

  });

  $("#space7").on("click", function(){

 //if(currentPlayer == 0){

    $("#space7").text(humPlayer);
    mainArr.splice(mainArr.indexOf(7),1);


     humSpaces[2][0] = 7;
     humSpaces[3][2] = 7;
     humSpaces[7][2] = 7;

   //console.log("Main array " + mainArr);
    document.getElementById("space7").disabled = true;
   checkScore();
   //checkDraw();
    currentPlayer = 1;

    if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }

  // }

  });

  $("#space8").on("click", function(){

    // if(currentPlayer == 0){


    $("#space8").text(humPlayer);

     mainArr.splice(mainArr.indexOf(8),1);
      humSpaces[2][1] = 8;
     humSpaces[4][2] = 8;


    //console.log("Main array " + mainArr);
    document.getElementById("space8").disabled = true;

    checkScore();

    currentPlayer = 1;

    if(playerWins == false){

      window.setTimeout(aiMove,1000);

    }
    // }
  });

  $("#space9").on("click", function(){

  if(currentPlayer == 0){

    $("#space9").text(humPlayer);
   mainArr.splice(mainArr.indexOf(9),1);


    humSpaces[2][2] = 9;
    humSpaces[5][2] = 9;
    humSpaces[6][2] = 9;

    //console.log("Main array " + mainArr);
    document.getElementById("space9").disabled = true
    //checkDraw();
    checkScore();
    currentPlayer = 1;

    if(playerWins == false){

    window.setTimeout(aiMove,1000);

    }

   }

  });

   document.getElementById("resetBtn").addEventListener("click", function(){

    resetGame();



   });

  function checkScore(){


    aiBlockMove = 0;
    var newArr = [];

    //console.log(humSpaces);
    //console.log("Main Array Length " + mainArr.length);


      for(var x = 0; x < humSpaces.length; x++){ //check to see if the player won

      if(humSpaces[x].length == 3 && checkWin(humSpaces[x]) == true){

               playerWins = true;
               playerWinRow = x;
      }

    }

    if(playerWins == true){ //if the player won, highlight the winning row in green and restart the game
      //alert("Player wins!! At row " + playerWinRow);

      var bArr = winArr[playerWinRow];

      for(var z = 0; z < bArr.length; z++){
       //console.log(document.getElementById('space' + z ).style.background);
        document.getElementById('space' + bArr[z] ).style.background = "green";
        //console.log("in the array" + i)
      }
      window.setTimeout(resetGame, 2000);
    }

    for(var y = 0; y < aiSpaces.length; y++){  //check to see if one of the PC's winning rows is empty and, if it is that means the PC won.
      if(aiSpaces[y].length == 0){
        //console.log("empty array so pc wins");
        aiWins = true;
        aiWinRow = y;
        //console.log(compWinRow);
      }
    }


    if(aiWins == true){  //highlight the winning row and restart the game
      //alert("Computer wins!! At row" + compWinRow);
      var pcArr = winArr[aiWinRow];

      for(var a = 0; a < pcArr.length; a++){
        document.getElementById('space' + pcArr[a] ).style.background = "red";

      }
      window.setTimeout(resetGame, 2000);
    }


    for(var i = 0; i < humSpaces.length; i++){   //check to see if the player has a chance to win the game then the PC should block the win

      if(humSpaces[i].length >= 2 && checkArr(humSpaces[i]) == true){


        newArr = diffArray(humSpaces[i], winArr[i]);
        //console.log("PC needs to do this move to block " + newArr);
        aiBlockMove = newArr[0];

        if(mainArr.indexOf(aiBlockMove) != -1){

          //console.log("Player has win opp");
          playerWinOpp = true;
        }
      }
    }

    //if(oneSpaceLeft == false){
      for(var j = 0; j < aiSpaces.length; j++){
        if(aiSpaces[j].length == 1 && mainArr.indexOf(aiSpaces[j][0]) != -1){
          //console.log("PC has win opp");
          aiWinOpp = true;
          aiWinMove = aiSpaces[j][0];

        }else{
          aiWinOpp = false;
        }
      }



    if(mainArr.length == 0 && (playerWins == false && aiWins == false)){
      //console.log("Draw");
      window.setTimeout(resetGame, 1000);

    }

 }

  function resetGame(){



    mainArr = [1,2,3,4,5,6,7,8,9];
    aiWins = false;
    playerWins = false;
    aiWinOpp = false;
    playerWinOpp = false;
    emptySpaceArr = [];
    humSpaces =[];
    humSpaces[0] = new Array();
    humSpaces[1] = new Array();
    humSpaces[2] = new Array();
    humSpaces[3] = new Array();
    humSpaces[4] = new Array();
    humSpaces[5] = new Array();
    humSpaces[6] = new Array();
    humSpaces[7] = new Array();
    aiSpaces = [[1,2,3], [4,5,6],[7,8,9], [1,4,7],[2,5,8], [3,6,9], [1,5,9], [3,5,7]];

   for(var i = 1; i < 10; i++){
       document.getElementById('space'+i).disabled = false;
       document.getElementById('space'+i).innerHTML = "";
       document.getElementById('space'+i).style.background = "lightgray";
  }
     //document.getElementById("xbutton").style.visibility = "visible";
    //document.getElementById("obutton").style.visibility = "visible";
    //document.getElementById("obutton").disabled = false;
    //document.getElementById("xbutton").disabled = false;

    currentPlayer = 1;
    aiMove();
  }

//}

  function aiMove(){

    //console.log("Player has a win opp: " + oneSpaceLeft);
    //console.log("AI Move");

    var spacesArr = [1,2,3,4,5,6,7,8,9];
    var aiSpace = 0;

    var emptySpaceArr = spacesArr.filter( function(val){

      if(document.getElementById('space'+val).disabled == true){
        return false;
      }
    return true;
    });

  //  console.log("empty spaces " + emptySpaceArr);

   var move = randomSpace(0,emptySpaceArr.length);


   function randomSpace(min, max){
     return Math.floor(Math.random()*(max - min) + min);
   }


    if(aiWinOpp == true && emptySpaceArr.indexOf(aiWinMove) != -1){

      //console.log("go for win");

      aiSpace = aiWinMove;


    }else if(playerWinOpp == true && aiWinOpp == false && emptySpaceArr.indexOf(aiBlockMove) != -1){

      //console.log("block");

      aiSpace = aiBlockMove;
      playerWinOpp = false;

    }else{

      // console.log("One Space Left? " + playerWinOpp);
      // console.log("Ai Win Opp? " + aiWinOpp);
      // console.log("random space");
       aiSpace = emptySpaceArr[move];

    }

    // console.log("AI's move " + aiSpace);

     document.getElementById('space'+aiSpace).innerHTML = aiPlayer;
     document.getElementById('space'+aiSpace).disabled = true;
     mainArr.splice(mainArr.indexOf(aiSpace),1);



     for(var i = 0; i < aiSpaces.length; i++){

       if(aiSpaces[i].indexOf(aiSpace) != -1){

         aiSpaces[i].splice(aiSpaces[i].indexOf(aiSpace),1);

       }

     }

    //console.log(aiSpaces);


    //console.log("Current Player " + currentPlayer);
     window.setTimeout(checkScore, 3000);
     currentPlayer = 0;
    //console.log("Main array " + mainArr);
  }



  function diffArray(arr1, arr2) {  //function to check for differences between the array of the picked spaces and the array of winning spaces to see what space the player or computer should pick next to win
  var newArr = [];


  function arrCheck1(value){

     if(arr1.indexOf(value) == -1){

         return true;

       }

  }

  function arrCheck2(value){



       if(arr2.indexOf(value) == -1){

         return true;

       }



  }

    var arrDiff1 = arr2.filter(arrCheck1);

    var arrDiff2 = arr1.filter(arrCheck2);

    newArr = arrDiff1.concat(arrDiff2);



   return newArr;

}

  function checkArr(array){

    var number = 0;

    for(var i = 0; i<array.length; i++){
      if(typeof array[i] == 'number'){
        number += 1;
      }
    }

    if(number == 2){
      return true;
    }else{
      return false;
    }

  }

  function checkWin(array){

    var number = 0;

    for(var i = 0; i<array.length; i++){
      if(typeof array[i] == 'number'){
        number += 1;
      }
    }

    if(number == 3){
      return true;
    }else{
      return false;
    }

  }

});
