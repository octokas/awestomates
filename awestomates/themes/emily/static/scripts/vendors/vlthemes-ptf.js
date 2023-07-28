// VLThemes Portfolio

(function ($) {
    "use strict";

function nivoPopup(){
    $('a').nivoLightbox({
    effect: 'slideUp',                            
    theme: 'vlthemes',                         
    keyboardNav: true,                      
    clickOverlayToClose: true
    }); 
}


    function load_more_projects() {
        function link_disable() {
            $('.load-more-btn')
                .addClass('disable')
                .find('span')
                .text('All items loaded');
                
        }





        var portfolio_track_click  = 0,
            portfolio_offset       = 0,
            portfolio_items_loaded = parseInt($('.load-more-btn').attr('data-load'), 10);
        $('.load-more-btn').on('click', function (e) {
            e.preventDefault();
            $.ajax({
                cache   : false,
                dataType: "html",
                msg     : '',
                success : function (data) {
                    var items  = $(data).filter('.vl-portfolio-item'),
                        length = items.length,
                        html   = '';
                    if (length > 0) {
                        if (portfolio_offset !== length) {
                            for (var i = 0; portfolio_offset < length && i < portfolio_items_loaded; portfolio_offset++, i++) {
                                html += items
                                    .eq(portfolio_offset)
                                    .prop('outerHTML');
                            }
                            $('.vl-portfolio-list').append(html);
                            $('.vl-portfolio-list').imagesLoaded(function () {
                                $(window).trigger('resize');
                                $('.vl-portfolio-list')
                                    .isotope('reloadItems')
                                    .isotope();
                                    nivoPopup();
                               
                                
                              
                            });
                            if (length <= portfolio_items_loaded || portfolio_offset == length) {
                                link_disable();
                            }
                        } else {
                            link_disable();
                        }
                    } else {
                        link_disable();
                    }
                },
                type    : "POST",
                url     : $(".load-more-btn").attr("href")
            });
        });
        //
    }
    
    $(document).ready(function () {
 if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
            $(".vl-portfolio-list")
                .imagesLoaded(function () {
                    var container = $('.vl-portfolio-list');

                    container.isotope({
                        itemSelector: '.vl-portfolio-item', 
                        layoutMode: 'masonry', 
                        transitionDuration: '1.2s'
                    });
                    $('.filters li').on('click', function () {
                        var $this = $(this);
                        $('.filters')
                            .find('li')
                            .removeClass('active-filter');
                        $(this).addClass('active-filter');
                        var selector = $(this).attr('data-filter');
                        container.isotope({filter: selector});
                        return false;
                    });
                    $(window).resize(function () {
                        container.isotope();
                    });
                });
        }
        load_more_projects();
        nivoPopup();

    });
})(jQuery);
