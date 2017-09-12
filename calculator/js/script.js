$(document).ready(function() {

  var inputArr = [];  //array for outputting the values typed in
  var calcArr = [];   //outputs the values inputted and shows the calculation
  var lastArr = [];
  var sum = 0;
  var firstValue = 0;
  var operator;
  var re = /[x\/\+\-]/;
  var displayStr = '';
  var divisionSign = '&divide;';
  var multVal = 0;

  $(".btn").click(function(event) {
      // Removes focus of the button.
      $(this).blur();
    });

 $(".zeroBtn").on("click", function(){

     var inputVal = $("#displayArea").val();

   //console.log(eval(inputVal));

   /*if(inputVal.search(re) != -1 || inputVal == 0){
        inputArr = [];
      }*/



      if(inputVal > 0 || inputVal.search('.') !== -1){

        inputArr.push(0);
      calcArr.push(0);

      $("#displayArea").val(inputArr.join(''));
   $("#calcArea").val(calcArr.join(''));

      }

});

  $("#oneBtn").on("click", function(){


     var inputVal = $("#displayArea").val();

     //console.log(eval(inputVal));

    if(inputVal.search(re) != -1){
        inputArr = [];
      }


      inputArr.push(1);
      calcArr.push(1);

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

  $("#twoBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;

    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }



      inputArr.push(2);
      calcArr.push(2);

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

 $("#threeBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;

   if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }


      inputArr.push(3);
      calcArr.push(3);

    document.getElementById("displayArea").value = inputArr.join('');
   document.getElementById("calcArea").value = calcArr.join('');

});


$("#fourBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;

    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }


      inputArr.push(4);
      calcArr.push(4);

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

$("#fiveBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;

    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }

      inputArr.push(5);
      calcArr.push(5);

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

  $("#sixBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;

    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }

      inputArr.push(6);
      calcArr.push(6);

      document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});



  $("#sevenBtn").on("click", function(){

    var inputVal = document.getElementById("displayArea").value;


    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }

    inputArr.push(7);
      calcArr.push(7);

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

  $("#eightBtn").on("click", function(){

      var inputVal = document.getElementById("displayArea").value;

    //console.log(inputVal);

    if(inputVal.search(re) != -1 || (inputVal == 0 && inputVal.search('.') == -1)){
        inputArr = [];
      }

      inputArr.push(8);
      calcArr.push(8);

      document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

  $("#nineBtn").on("click", function(){

  /*  console.log("before 9 calc arr " + calcArr);
    console.log("before 9 last arr " + lastArr);

    if(lastArr.length >= 1){
      calcArr = [];
      calcArr = lastArr;

    }

    console.log("calc arr after adding 9" + calcArr);*/

    var inputVal = document.getElementById("displayArea").value;

    if(inputVal.search(re) != -1 || inputVal == 0){
      inputArr = [];

      }



      inputArr.push(9);
      calcArr.push(9);

      document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

});

  $("#acBtn").on("click", function(){

    inputArr = [];
    calcArr = [];
    lastArr = [];

    document.getElementById("displayArea").value = 0
    document.getElementById("calcArea").value = 0;

    //alert(document.getElementById("displayArea").value);

  });

$("#clearBtn").on("click", function(){



  calcArr = lastArr;



 if(inputArr.length >= 1){
    var inputStr = inputArr.join('');
    var inputNum = Number(inputStr);
    calcArr.push(inputNum);
  }

  //console.log("Calc Array " + calcArr);

  inputArr=[];

  console.log("Calc Array " + calcArr);
   console.log("last Array " + lastArr);


  if(calcArr.length > 1  && calcArr.indexOf('=') == -1){

    calcArr.pop();
    //lastArr.pop();
    document.getElementById("calcArea").value = calcArr.join('');


  }else{

    lastArr=[];
    calcArr=[];
    document.getElementById("calcArea").value = 0;

  }



  document.getElementById("displayArea").value = 0;


});

  $("#multiplyBtn").on("click", function(){



    var inputVal = document.getElementById("displayArea").value;
   // var displayValue = calcArr.join('');

    operator = 'x';

   //console.log(typeof displayValue);

    if(inputVal > 0){

    var numStr = inputArr.join('');
    lastArr.push(numStr);
    lastArr.push('*');
    calcArr.push('x');
    inputArr = ['x'];
    //console.log("last arr " + lastArr);
    //calcArr = lastArr;

    // console.log("calc arr " + calcArr);

    document.getElementById("displayArea").value = inputArr.join('');

      document.getElementById("calcArea").value = calcArr.join('');
    }

  });

  $("#divideBtn").on("click", function(){

   //console.log("last arr before divide " + lastArr);
    //console.log("calc arr before divide " + calcArr);

    var displayValue = document.getElementById("displayArea").value;
    operator = '/';

    //console.log("display value " + displayValue);

    if(displayValue > 0){


    lastArr.push(displayValue);
    lastArr.push('/');
    calcArr.push('/');
    inputArr = ['/'];

   // console.log("last arr after divide " + lastArr);
    //console.log("calc arr after divide " + calcArr);

    //calcArr = lastArr;

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

    }

  });

   $("#addBtn").on("click", function(){

    var displayValue = document.getElementById("displayArea").value;

   /* if(typeof(displayValue) == 'number'){

      multVal = displayValue;

    } */

    operator = '+';

    if(displayValue > 0){

    lastArr.push(displayValue);
    lastArr.push('+');
    calcArr.push('+');
    inputArr = ['+'];

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');
    }

  });

  $("#subtractBtn").on("click", function(){

    var displayValue = document.getElementById("displayArea").value;
    operator = '-';

    if(displayValue > 0){

    lastArr.push(displayValue);
    lastArr.push('-');
    calcArr.push('-');
    inputArr = ['-'];

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');
    }

  });

   $("#decimalBtn").on("click", function(){

   var displayVal = document.getElementById("displayArea").value;

    if(displayVal == 0){

      calcArr.push(0);
    inputArr.push(0);

    }

    if(displayVal.search(re) == -1){

    calcArr.push('.');
    inputArr.push('.');

    document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');
    }

  });

  $("#equalsBtn").on("click", function(){

    //var inputVal = document.getElementById("displayArea").value;
   calcArr = lastArr;

    var result;

    if(inputArr.length >= 1){
    var inputStr = inputArr.join('');
    var inputNum = Number(inputStr);
    calcArr.push(inputNum);
  }
    console.log("Calc Array " + calcArr);
    console.log("Last Array " + lastArr);

    if(calcArr.length >= 3){

      var evalStr = calcArr.join('');
      result = eval(evalStr);
      result = result.toFixed(2);
      calcArr.push('=');
      calcArr.push(result);
      inputArr=[];
      inputArr.push(result);



       document.getElementById("displayArea").value = inputArr.join('');
    document.getElementById("calcArea").value = calcArr.join('');

      calcArr = [];
      lastArr = [];

      calcArr.push(result);

    }


  });

});
