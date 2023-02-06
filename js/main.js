/*

    Template Name: Adalot - Responsive Law Html5 Template;
    Template URI: http://hastech.company/
    Description: This is Bootstrap4 html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/

(function ($) {
	"use Strict";
/*---------------------------------
     Mean Menu Active
-----------------------------------*/
$('.header-menu-area nav').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
});
/*---------------------------------
     Sticky Menu Active
-----------------------------------*/
$(window).on('scroll',function() {
if ($(this).scrollTop() >50){  
    $('.header-sticky').addClass("is-sticky");
  }
  else{
    $('.header-sticky').removeClass("is-sticky");
  }
});

})(jQuery);