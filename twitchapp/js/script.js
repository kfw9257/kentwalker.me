

var twitchArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

var openingDiv = "";
var middleDiv = "";
var middleClosingDiv = "";
var accountClosedOpeningDiv = "";
var accountClosedClosingDiv = "";

var liveChannelArr = [];

var offlineUserArr = [];

var optionChecked = "";

var accountClosedArr = [];

var names = [];

startGettingChannels();

setInterval(startGettingChannels, 60000);

function startGettingChannels(){

  $(".offline").html("");
  $(".online").html("");
  $("#streams").html("");

  liveChannelArr = [];
  offlineUserArr = [];
  accountClosedArr = [];
  names = [];

    for(var i = 0; i < twitchArr.length; i++){

      getChannels(i);


  }

}

$("#optAll").click(function(){

  if(optionChecked !== "all"){

    optionChecked = "all";
    startGettingChannels();

  }

});

$("#optOnline").click(function(){

   if(optionChecked !== "online"){
     optionChecked = "online";
     startGettingChannels();
   }

});

$("#optOffline").click(function(){

   if(optionChecked !== "offline"){
     optionChecked = "offline";
    startGettingChannels();
   }

});



$( document ).ajaxStop(function() {

  onlineOpeningDiv = "<div class='online row'><div class='col-md-2' style='padding: 0;'><img class= 'img-rounded img-responsive' src='";

  offlineOpeningDiv = "<div class='offline row'><div class='col-md-2' style='padding: 0;'><img class= 'img-rounded img-responsive' src='";

  middleDiv = "' height='75px' width='50px' /></div><div class='col-md-3 text-center' style='padding-top: 15px;'><a href='https://www.twitch.tv/";

  middleClosingDiv = "</a></div><div class='col-md-6 text-right' style='padding-top: 15px;'><b>";

  accountClosedOpeningDiv = "<div class='offline row'><div class='col-md-2' style='padding: 0;'><img class= 'img-rounded img-responsive' src='http://www.banachcourse.com/wp-content/uploads/2012/10/Dramatic-Question-Mark-300x300.png' width='50px' /></div><div class='col-md-3 text-center' style='padding-top: 15px;'><a href='https://www.twitch.tv/";

  accountClosedClosingDiv = "</a></div><div class='col-md-6 text-right' style='padding-top: 15px;'><b>Account Closed</b></div></div>";

 if(document.getElementById("optAll").checked){

  for(var i = 0; i < liveChannelArr.length; i++){

    $("#streams").append( onlineOpeningDiv + liveChannelArr[i]["stream"]["channel"]["logo"] + middleDiv + liveChannelArr[i]["stream"]["channel"]["name"] + "' target='_blank'>" + liveChannelArr[i]["stream"]["channel"]["name"] + middleClosingDiv + liveChannelArr[i]["stream"]["game"] + ": " + liveChannelArr[i]["stream"]["channel"]["status"] + "</b></div></div>");



  }


  for(var i = 0; i < offlineUserArr.length; i++){

    $("#streams").append( offlineOpeningDiv + offlineUserArr[i]["logo"] + middleDiv + offlineUserArr[i]["name"] + "' target='_blank'>" + offlineUserArr[i]["name"] + middleClosingDiv + offlineUserArr[i]["status"] + "</b></div></div>");

  }

   for(var i = 0; i < accountClosedArr.length; i++){
     $("#streams").append( accountClosedOpeningDiv + accountClosedArr[i] + "' target='_blank'>" + accountClosedArr[i] + accountClosedClosingDiv);
   }




 }else if(document.getElementById("optOnline").checked){

   for(var i = 0; i < liveChannelArr.length; i++){

     $("#streams").append( onlineOpeningDiv + liveChannelArr[i]["stream"]["channel"]["logo"] + middleDiv + liveChannelArr[i]["stream"]["channel"]["name"] + "' target='_blank'>" + liveChannelArr[i]["stream"]["channel"]["name"] + middleClosingDiv + liveChannelArr[i]["stream"]["game"] + ": " + liveChannelArr[i]["stream"]["channel"]["status"] + "</b></div></div>");
   }

  }else{

     for(var i = 0; i < offlineUserArr.length; i++){

    $("#streams").append(offlineOpeningDiv + offlineUserArr[i]["logo"] + middleDiv + offlineUserArr[i]["name"] + "' target='_blank'>" + offlineUserArr[i]["name"] + middleClosingDiv + offlineUserArr[i]["status"] + "</b></div></div>");


  }
    for(var i = 0; i < accountClosedArr.length; i++){
     $("#streams").append( accountClosedOpeningDiv + accountClosedArr[i] + "' target='_blank'>" + accountClosedArr[i] + accountClosedClosingDiv);
   }


 }

});



function getChannels(i){
     $.ajax ({
    url: 'https://api.twitch.tv/kraken/streams/' + twitchArr[i],
    headers: {
      'Client-ID' : 'b9r6ayq1dapoc77rq21d84a2gf3knde'
    },
    type: 'GET',
    dataType: 'json',
    success: function(data){




        if(data["stream"] == null){

      $.ajax ({
        url: 'https://api.twitch.tv/kraken/users/' + twitchArr[i],
        headers: {
      'Client-ID' : 'b9r6ayq1dapoc77rq21d84a2gf3knde'
        },
        type: 'GET',
        dataType: 'json',
        success: function(data2){

          data2["status"] = "Offline";


          offlineUserArr.push(data2);
        },
        error: function(err) {  }
      });



     }else{


      liveChannelArr.push(data);

     }



    },
    error: function(err) {


        accountClosedArr.push(twitchArr[i]);


      }
  });



}
