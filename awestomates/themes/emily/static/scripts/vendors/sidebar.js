/*
 * Copyright 2013, Theia Sticky Sidebar, Liviu Cristian Mirea Ghiban.
 */

(function($) {
  $.fn.theiaStickySidebar = function(options) {
    var defaults = {
      'containerSelector': '',
      'additionalMarginTop': 0,
      'additionalMarginBottom': 0,
      'updateSidebarHeight': false
    };
    options = $.extend(defaults, options);

    // Validate options
    options.additionalMarginTop = parseInt(options.additionalMarginTop);
    options.additionalMarginBottom = parseInt(options.additionalMarginBottom);

    this.each(function() {
      var o = {};
      o.sidebar = $(this);

      // Save options
      o.options = options || {};

      // Get container
      o.container = $(o.options.containerSelector);
      if (o.container.size() == 0) {
        o.container = o.sidebar.parent();
      }

      // Create sticky sidebar
      o.stickySidebar = $('<div>').append(o.sidebar.children());
      o.sidebar.append(o.stickySidebar);

      // Add a 1px top and bottom padding to disable margin collapse. Otherwise, the sidebar's height will change when setting "position: fixed".
      o.stickySidebar.css('padding', '1px 0');

      // Get existing top and bottom margins
      o.marginTop = parseInt(o.sidebar.css('margin-top')) + parseInt(o.sidebar.css('padding-top'));
      o.marginBottom = parseInt(o.sidebar.css('margin-bottom')) + parseInt(o.sidebar.css('padding-bottom')) + 1;

      o.onScroll = function(o) {
        // Stop if the sidebar isn't visible.
        if (!o.stickySidebar.is(":visible")) {
          return;
        }

        // Stop if the sidebar width isn't larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
        if (o.sidebar.width() + 50 >  o.container.width()) {
          resetSidebar();
          return;
        }

        var scrollTop = $(document).scrollTop();
        var fixed = false;
        var tempTop;
        var top = null;
        var sidebarSmallerThanWindow = (o.stickySidebar.height() + o.marginTop + o.marginBottom + o.options.additionalMarginTop + o.options.additionalMarginBottom) < $(window).height();

        if (sidebarSmallerThanWindow) {
          tempTop = 0 - o.marginTop - o.options.additionalMarginTop;
          if (scrollTop >= tempTop + o.sidebar.offset().top) {
            fixed = true;
            top = -tempTop;
          }
        }
        else {
          tempTop = o.marginBottom - $(window).height() + o.stickySidebar.height() + o.options.additionalMarginBottom;
          if (scrollTop >= tempTop + o.sidebar.offset().top) {
            fixed = true;
            top = -tempTop;
          }
        }

        if (fixed) {
          var maxTop = o.container.offset().top + getClearedHeight(o.container) - o.stickySidebar.height() - o.marginBottom - $(window).scrollTop();
          if (top > maxTop) {
            top = maxTop;
          }

          if (o.options.updateSidebarHeight == false) {
            o.sidebar.css({
              'min-height': o.sidebar.height()
            });
          }

          o.stickySidebar.css({
            'position': 'fixed',
            'width': o.stickySidebar.width(),
            'top': top,
            'left': o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left'))
          });

          if (o.options.updateSidebarHeight == true) {
            o.sidebar.css({
              'min-height': o.stickySidebar.height() + o.stickySidebar.offset().top - o.sidebar.offset().top
            });
          }
        }
        else {
          resetSidebar();
        }
      };

      // Initialize the sidebar's position.
      o.onScroll(o);

      // Recalculate the sidebar's position on every scroll and resize.
      $(document).scroll(function(o) {
        return function() {
          o.onScroll(o);
        };
      }(o));
      $(window).resize(function(o) {
        return function() {
          o.stickySidebar.css({'position': 'static'});
          o.onScroll(o);
        };
      }(o));

      // Reset the sidebar to its default state
      function resetSidebar() {
        o.sidebar.css({
          'min-height': '0'
        });
        o.stickySidebar.css({
          'position': 'static',
          'width': ''
        });
      }

      // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
      function getClearedHeight(e) {
        var height = e.height();

        e.children().each(function() {
          height = Math.max(height, $(this).height());
        });

        return height;
      }
    });
  }
})(jQuery);

function initTheiaStickySidebar(options) {
  var sidebarSelectors = [];
  var sidebar;

  // Get the sidebar selector or try to guess automatically.
  if (!options['sidebarSelector']) {
    sidebarSelectors = [
      '#secondary',
      '#sidebar',
      '.sidebar',
      '#primary'
    ];
  }
  else {
    sidebarSelectors.push(options['sidebarSelector']);
  }
  for (var i = 0; i < sidebarSelectors.length; i++) {
    sidebar = jQuery(sidebarSelectors[i]);
    if (sidebar.size() > 0) {
      break;
    }
  }

  if (sidebar.size() > 0) {
    sidebar.theiaStickySidebar(options);
  }

}