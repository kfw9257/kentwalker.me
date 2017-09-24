$(document).ready(function() {

var results = $("#results").html;

  var search = "";

  $(".btn").on("mouseup", function(){
    $(this).blur();
  });

$("#searchButton").on("click",function(){

 search = document.getElementById("searchTxt").value;



  if(search == "")
  {
    // alert("You need to input a search word or phrase.");
  }
  else
  {

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + search + "&callback=?",
        type: 'GET',
        dataType: 'json',
        success: function(data) {


          $("#results").html("");

          for(i=0; i < data[2].length; i++)
          {
            $("#results").append('<a href="https://en.wikipedia.org/wiki/' + data[1][i] + '" target="_blank"><div class="result">' + data[2][i] + "</div></a><br />");
          }

           $("body").css("overflow-y", "scroll");

        },
      error: function(err) { alert(err); }
    });
  }
});

}); //document ready
