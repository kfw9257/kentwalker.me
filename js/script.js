$(document).ready(function() {


$(".image-link").hover(function() {
        $(this).find("img").stop().animate({
          "opacity" : 0.6
        });
      }, function() {
        $(this).find("img").stop().animate({
          "opacity" : 1.0
        });
      });

$("#menuIcon").mouseover(function(){
              //console.log("hover in");
               $("#collapsibleMenu").css("display","block");
          //
          // }, function() {
            //console.log("hover out");
             //$("#collapsibleMenu").css("display","none");
          });

$("#collapsibleMenu").mouseleave(function () {
      $("#collapsibleMenu").css("display","none");
  });

});
