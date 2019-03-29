$(document).ready(function(){
    
    $(window).scroll(function(){
        
        parallax();
    });
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        
        if(direction == "down")
        {
            $('nav').addClass('sticky');
        }
        else
        {
            $('nav').removeClass('sticky');
        }
        
    },{
        offset: '63px'
    });
    
    /* Scroll on Buttons */
    
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},600);
    });
    
    /*Navigation scroll */
   $("a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
     }
    });
    
    /* PARALLAX */
    
    function parallax(){
        var wScroll = $(window).scrollTop();
        $(".parallax-bg").css("background-position", "center " + wScroll*0.5 + "px");
    };
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
    
    $(window).resize(function(){

        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){

        nav.css("display", "block");

        icon.addClass('ion-close-round');

        icon.removeClass('ion-navicon-round');

        } else {

        nav.css("display", "none");

        icon.addClass('ion-navicon-round');

        icon.removeClass('ion-close-round');

        }

    });
});