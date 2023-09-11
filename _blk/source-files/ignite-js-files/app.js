/*! ------------------------------------------------
 * Project Name: Awestomates - An awesome place for new stomates!
 * Project Description: Awestomates - functional and beautifully designed coming soon and landing page template to kick-start your project
 * Tags: batmanwgd, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
 * Version: 1.0.0
 * Build Date: May 2023
 * Last Update: August 2023
 * This website is available on GitHub and Netlify
 * Author: batmanwgd
 * Author URI: https://github.com/batmanwgd
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  1. SVG Fallback
 *  2. Chrome Smooth Scroll
 *  3. Images moving ban
 *  4. Menu & Sections Behavior
 *  5. Popup Open/Close
 *  6. PhotoSwipe Gallery Images Replace
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

$(function() {

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

  // Images moving ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Menu & Sections Behavior
  var menuTrigger        = $('#menu-trigger'),
      menu               = $('#nav'),
      header             = $('#header'),
      footer             = $('#footer'),
      mainSection        = $('#main'),
      aboutSection       = $('#about'),
      worksSection       = $('#works'),
      contactSection     = $('#contact'),
      homeTrigger        = $('#home-trigger'),
      aboutTrigger       = $('#about-trigger'),
      worksTrigger       = $('#works-trigger'),
      contactTrigger     = $('#contact-trigger');

  menuTrigger.on('click', function(event){
    event.preventDefault();

    if (menu.hasClass('animate-in')) {
      menu.addClass('animate-out');
      setTimeout(function(){
        $('.active').addClass('animate-in');
        menuTrigger.removeClass('menu-opened');
      }, 500);
      setTimeout(function(){
        header.removeClass('menu-is-visible');
        footer.removeClass('menu-is-visible');
        menu.removeClass('animate-in animate-out');
        // if one of the content sections is opened, the header becomes light/transparent
        if ($('.inner').hasClass('active')) {
          header.addClass('inner-is-visible');
          footer.addClass('inner-is-visible');
        }
      }, 1500);
    } else {
      $('.active').addClass('animate-out');
      if ($('.inner').hasClass('active')) {
        header.removeClass('inner-is-visible');
        footer.removeClass('inner-is-visible');
      }
      header.addClass('menu-is-visible');
      footer.addClass('menu-is-visible');
      menuTrigger.addClass('menu-opened');
      setTimeout(function(){
        menu.addClass('animate-in');
        $('.active').animate({
          scrollTop: 0 ,
        }, 100);
      }, 500);
      setTimeout(function(){
        $('.active').removeClass('animate-out animate-in');
      }, 1200);
    }

  });

  // common actions on menu item click
  $('.nav__link').on('click', function(event){
    $('.active').removeClass('active');
    $('.active-link').removeClass('active-link');
    menu.addClass('animate-out');
    setTimeout(function(){
      menuTrigger.removeClass('menu-opened');
    }, 500);
    setTimeout(function(){
      menu.removeClass('animate-in animate-out');
      header.removeClass('menu-is-visible');
      footer.removeClass('menu-is-visible');
    }, 1500);
  });

  // home section open
  homeTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      mainSection.addClass('active animate-in');
      homeTrigger.addClass('active-link');
    }, 500);
  });

  // about section open
  aboutTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      aboutSection.addClass('active animate-in');
      aboutTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
      footer.addClass('inner-is-visible');
    }, 1500);
  });

  // works section open
  worksTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      worksSection.addClass('active animate-in');
      worksTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
      footer.addClass('inner-is-visible');
    }, 1500);
  });

  // contact section open
  contactTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      contactSection.addClass('active animate-in');
      contactTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
      footer.addClass('inner-is-visible');
    }, 1500);
  });

  // Popup Open/Close
  var notify            = $('#notify'),
      notifyTrigger     = $('#notify-trigger'),
      notifyClose       = $('#notify-close'),
      sayhello            = $('#sayhello'),
      sayhelloTrigger     = $('#sayhello-trigger'),
      sayhelloClose       = $('#sayhello-close');

  // Notify Form Open
  notifyTrigger.on('click', function(event){
    event.preventDefault();
    notify.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.addClass('is-scaled-up');
    });
  });

  // Notify Form Close
  notifyClose.on('click', function(event){
    event.preventDefault();
    notifyClose.removeClass('is-scaled-up');
    setTimeout(function(){
      notify.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      notify.removeClass('animate-in animate-out');
    }, 1000);
  });

  // Contact Form Open
  sayhelloTrigger.on('click', function(event){
    event.preventDefault();
    sayhello.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      sayhelloClose.addClass('is-scaled-up');
    });
  });

  // Contact Form Close
  sayhelloClose.on('click', function(event){
    event.preventDefault();
    sayhelloClose.removeClass('is-scaled-up');
    setTimeout(function(){
      sayhello.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      sayhello.removeClass('animate-in animate-out');
    }, 1000);
  });

  // PhotoSwipe Gallery Images Replace
    $('.my-gallery__link')
    // Background set up
    .each(function(){
    $(this)
    // Add a photo container
    .append('<div class="picture"></div>')
    // Set up a background image for each link based on data-image attribute
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });

});
