$(document).ready(function() {

  // var windowWidth = $(window).width();

  $(window).resize(function() {
    $screenWidthCheck = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if ($screenWidthCheck > 480) {
        $("#menuContainer").hide();
    }
   });


  var touch = 'ontouchstart' in document.documentElement
              || navigator.maxTouchPoints > 0
              || navigator.msMaxTouchPoints > 0;


// if(!touch) {
  // alert("Not a touch device");
    $(".image-link").hover(function() {
            $(this).find("img").stop().animate({
              "opacity" : 0.6
            });
          }, function() {
            $(this).find("img").stop().animate({
              "opacity" : 1.0
            });
          });

        // }

          $('#menuIcon').click( function(event){
                event.stopPropagation();
                $('#menuContainer').toggle();
                $('#drop').toggle();
            });

            $(document).click( function(){
                $('#menuContainer').hide();
            });


    // }else{

      // alert("Using a touch device");

      $("#menuIcon").on ('touchstart',function (event) {
          event.stopPropagation();
          $('#drop').toggle();
          $("#menuContainer").toggle();
        });

      $("#menuContainer").on ('touchend',function () {
            $("#menuContainer").hide();
            $("#drop").hide();
        });



    // }


// $("#menuIcon").hover(function(){
//               //console.log("hover in");
//                $("#menuContainer").show();
//
//            }, function() {
//             //console.log("hover out");
//              $("#menuContainer").hide();
//           });


  // $("#collapsibleMenu li a").on('touchend click', function () {
  // //hideMenu();
  //   // $(this).css("background-color","#FFC273");
  //   //location.href = this.getAttribute("href");
  //   $("#collapsibleMenu").hide();
  // })

  // $("#collapsibleMenu").on("tap",function(){
  //     $(this).hide();
  // });

  // function hideMenu() {
  //   $("#collapsibleMenu").css("display","none");
  //
  // }

});
