$(window).on("load", function() {

  "use strict";

  // Page loading
  setTimeout(function(){
    $(".loader__logo").removeClass('fadeIn').addClass('fadeOut');
  },600);
  setTimeout(function(){
    $('body').addClass('loaded');
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('loaded');
  },1200);

});

$(document).ready(function() {

  "use strict";

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  // Imags moving ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Scrollspy
  $('body').scrollspy({ target: '#navbar', offset: 30 });

  // Affix
  $('.docs-navigation').affix({
    offset: {
      top: 70
      //top: $(".demo__intro").outerHeight(true)
    }
  });

  // Navigation custom scrollbar
  $('.docs-navigation').mCustomScrollbar();

  // Smooth Scroll To Section
  var menuLink        = $("ul.nav li a[href^='#']");

  menuLink.on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 300, function(){
        // when done, add hash to url
        // (default click behaviour)
      window.location.hash = this.hash;
    });
  });

  // Smooth Scroll To Top
  var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 500,
      $back_to_top = $('.to-top-button');

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('fade-out');
    }
  });

  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, scroll_top_duration);
  });

});
