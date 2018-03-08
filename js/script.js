$(document).ready(function() {

  // var windowWidth = $(window).width();
//test to see if user has a mobile device. If they do, hide drop down menu
  $(window).resize(function() {
    $screenWidthCheck = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if ($screenWidthCheck > 480) {
        $("#drop").hide();
    }
   });


  var touch = 'ontouchstart' in document.documentElement
              || navigator.maxTouchPoints > 0
              || navigator.msMaxTouchPoints > 0;

//only use rollover effects on non-touchscreen devices

 if(!touch) {
//rollover effects for project items
    $(".image-link").hover(function() {
            $(this).find("img").stop().animate({
              "opacity" : 0.6
            }); //animate method end
            $(this).find(".project-info").show().stop().animate({
              "opacity" : 1.0,
            }); //animate method end
          }, function() {
            $(this).find("img").stop().animate({
              "opacity" : 1.0
            }); //animate method End
            $(this).find(".project-info").show().stop().animate({
              "opacity" : 0,
            }); //animate method end
          });

        }

          $('#menuIcon').click( function(event){
                event.stopPropagation();
                $('#drop').toggle();
                // $('#menuContainer').toggle();
            });

            $(document).click( function(){
                $('#drop').hide();
            });



});
