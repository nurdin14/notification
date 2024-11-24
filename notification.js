$(document).ready(function () {
    let msg = $(".card-notif").data("message");
    if (msg === "failed") {
        $('.bg-fill').css({
            fill: '#DC3545'
        });
        
        $('.title').css({
            color: '#DC3545'
        });

        $('.title').text('Failed');
        $('.message').text('Your data has been failed added');

        $('.loading').css({
            backgroundColor: '#DC3545'
        });
        
        $('.avatar-image').attr('src', 'av2.png');
    }
  
    $(".loading").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
      $(".card-notif").fadeOut(500); 
    });
  
    $(".close").on("click", function () {
      $(".card-notif").fadeOut(500);
    });
  });
  