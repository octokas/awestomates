// Author : VLThemes
// Version : 1.0 (Release)
jQuery.noConflict()(function($) {
    'use strict';
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iPhone: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        iPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        iPod: function() {
            return navigator.userAgent.match(/iPod/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    var $wh;
    var $ww;

    function updateWndSize() {
        $wh = $(window).height();
        $ww = $(window).width();
        $('.fullheight').css('height', $wh + 'px');
    }
    $(window).on('resize load', updateWndSize);
    /************************/
    // Blog Slider
    /************************/
    function blogSlider() {
        var $blogSlider = $('.blog-thumb-slider');
        $('.blog-arrow-prev i').on('click', function() {
            $blogSlider.slick('slickPrev');
        });
        $('.blog-arrow-next i').on('click', function() {
            $blogSlider.slick('slickNext');
        });
        $blogSlider.slick({
            slide: 'img',
            autoplay: true,
            infinite: false,
            dots: false,
            arrows: false,
            speed: 700
        });
    }

    function previewSlider() {
        var $previewSlider = $('.preview-post-slider');
        $('.preview-post-nav-left').on('click', function() {
            $previewSlider.slick('slickPrev');
        });
        $('.preview-post-nav-right').on('click', function() {
            $previewSlider.slick('slickNext');
        });
        $previewSlider.slick({
            autoplay: false,
            infinite: false,
            dots: false,
            arrows: false,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    /************************/
    // Popup Window
    /************************/
    function nivoPopup() {
        $('a').nivoLightbox({
            effect: 'slideUp',
            theme: 'vlthemes',
            keyboardNav: true,
            clickOverlayToClose: true
        });
    }
    /************************/
    // Menu
    /************************/
    function menuTriggerOpen() {
        var menuwrap = $('.menu-wrap');
        if (menuwrap.is(':hidden')) {
            menuwrap.show('slide', {
                direction: 'down'
            }, 500);
        } else {
            menuwrap.hide('slide', {
                direction: 'up'
            }, 450);
        }
    }

    function vlMenu() {
        $('.vl-menu .has-sub-menu > a').on('click', function(e) {
            e.preventDefault();
        });
        $('.vl-menu .has-sub-menu').on('mouseenter', function() {
            $(this).children('ul.sub-menu').stop().slideDown(500);
        }).on('mouseleave', function() {
            $('ul.sub-menu').stop().slideUp(500);
        });
        $('.menu-toggle').on('click', function(e) {
            e.preventDefault();
            menuTriggerOpen();
        });
    }
    $(document).ready(function() {
        /************************/
        // Call Function
        /************************/
        vlMenu();
        updateWndSize();
        nivoPopup();
        blogSlider();
        previewSlider();
        /************************/
        // Parallax
        /************************/
        $('.jarallax').jarallax({
            speed: 0.2,
            noAndroid: true
        });
        /************************/
        // Animsition
        /************************/
        var animsition = $('.animsition');
        animsition.animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 300,
            outDuration: 500,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            loadingInner: '<div class="vl-loading"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [
                'animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) {
                window.location.href = url;
            }
        });
        animsition.on('animsition.inEnd', function() {
            setTimeout(function() {
                $('.page-title').addClass('active');
            }, 200)
        });
        animsition.on('animsition.outStart', function() {
            $('.menu-wrap').hide('slide', {
                direction: 'up'
            }, 450);
        });
        /************************/
        // pJax Blog
        /************************/
        /************************/
        // Blog Masonry
        /************************/
        var blogmasonry = $('.blog-masonry');
        blogmasonry.imagesLoaded(function() {
            $(window).trigger('resize');
            blogmasonry.isotope({
                itemSelector: '.isotope-item'
            });
        });
        /************************/
        // Sticly Sidebar
        /************************/
        var VLStickySidebar = {
            sidebarSelector: ".sidebar-sticky",
            containerSelector: ".sidebar-sticky-content",
            additionalMarginTop: 30,
            additionalMarginBottom: 30,
            updateSidebarHeight: true
        };
        initTheiaStickySidebar(VLStickySidebar);
        /************************/
        // Post Counter
        /************************/
        var $blogcontainer = $('.preview-post-wrap, .preview-post-slider-wrap'),
            $blogitem = $('.preview-post');

        function blogCounter() {
            $blogcontainer.find($blogitem).each(function(i) {
                if ($(this).is(':visible')) {
                    i++;
                    $(this).find('.post-counter .cur').text(i);
                    $blogitem.find('.post-counter .sum').text(Math.max(i));
                }
            });
        }
        blogCounter();
        /************************/
        // Ajax Load Post
        /************************/
        var curCont = 0;
        var $timeOut = 200;
        $(document).on('click', '.preview-post .preview-title a', function() {
            var $this = $(this);
            setTimeout(function() {
                $('.preview-post').removeClass('active');
                $this.closest('.preview-post').addClass('active');
            }, $timeOut);
        });
        $(document).on('click', '.preview-post-masonry .preview-title a', function(e) {
            e.preventDefault();
            curCont = $(this).closest('.preview-post-masonry');
            // console.log(curCont);
        });
        $(document).on('click', '.preview-post .preview-title a, .preview-post-masonry .preview-title a', function(e) {
            e.preventDefault();
            $('.preloader-blog').addClass('active');
            $('.pjax-container').html('');
            // $('.pjax-container, .pjax-container-masonry').removeClass('fadeInDown').addClass('fadeInUp');
            $('.pjax-container').load($(this).attr('href') + ' .blog-post-item', {}, function() {
                // $('.pjax-container, .pjax-container-masonry').removeClass('fadeInUp').addClass('fadeInDown');
                setTimeout(function() {
                    blogSlider();
                    nivoPopup();
                    $('.preloader-blog').removeClass('active');
                }, $timeOut);
                if ($('div').hasClass('blog03')) {
                    $('.pjax-container').find('.blog-post-item').prepend('<a href="#" class="close-ajax"><i class="pe-close"></i></a>');
                }
            });
            $('.pjax-container').velocity('scroll', {
                duration: 750
            });
        });
        $(document).on('click', '.close-ajax', function(e) {
            e.preventDefault();
            $('.pjax-container').html('');
            curCont.velocity('scroll', {
                duration: 750
            });
        });
        /************************/
        // Progress Bar
        /************************/
        $('.progress-bar li').each(function() {
            $(this).appear(function() {
                var percent = $(this).find('span').attr('data-width');
                var $endNum = parseInt($(this).find('p i').text(), 10);
                var $that = $(this);
                $(this).find('span').velocity({
                    width: percent + '%'
                }, {
                    duration: 1200
                }, 'ease-in-out');
                $(this).find('p i').countTo({
                    from: 0,
                    to: $endNum,
                    speed: 1200,
                    refreshInterval: 30
                });
            });
        });
        /************************/
        // Slider Awestomates
        /************************/
        var $statusPrev = $('.awestomates-arrow-prev span');
        var $statusNext = $('.awestomates-arrow-next span');
        var $slickElement = $('.slider-awestomates');
        $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusPrev.text(i - 1 + '/' + slick.slideCount);
            $statusNext.text(i + '/' + slick.slideCount);
        });
        $('.awestomates-arrow-prev').on('click', function(e) {
            e.preventDefault();
            $slickElement.slick('slickPrev');
        });
        $('.awestomates-arrow-next').on('click', function(e) {
            e.preventDefault();
            $slickElement.slick('slickNext');
        });
        $slickElement.slick({
            autoplay: true,
            infinite: false,
            dots: false,
            arrows: false,
            speed: 700
        });
        /************************/
        // Contact Form
        /************************/
        $('#contact-form').on('submit', function(e) {
            return form_to_ajax_request($(this), ['email', 'name', 'message'], ['email', 'name', 'message']);
        });

        function form_to_ajax_request(form_el, all_fields, required_fields) {
            var fields_values = [];
            var error = false;
            //get values from fields
            $.each(all_fields, function(index, value) {
                fields_values[value] = form_el.find('*[name=' + value + ']').val();
            });
            //check if required fields are set
            $.each(required_fields, function(index, value) {
                if (!isSet(fields_values[value])) {
                    var message = form_el.data(value + '-not-set-msg');
                    if (!isSet(message))
                        message = form_el.data('all-fields-required-msg');
                    setReturnMessage(form_el, message);
                    showReturnMessage(form_el);
                    error = true;
                    return;
                }
            });
            if (error)
                return false;
            //form data query object for ajax request
            var data_query = {};
            $.each(all_fields, function(index, value) {
                data_query[value] = fields_values[value];
            });
            data_query['ajax'] = true;
            //show ajax loader
            showLoader(form_el);
            //send the request
            $.ajax({
                type: form_el.attr('method'),
                url: form_el.attr('action'),
                data: data_query,
                cache: false,
                dataType: "text"
            }).fail(function() { //request failed
                setReturnMessage(form_el, form_el.data('ajax-fail-msg'));
                showReturnMessage(form_el);
            }).done(function(message) { //request succeeded
                if (!isSet(message)) {
                    clearForm(form_el);
                    setReturnMessage(form_el, form_el.data('success-msg'));
                    showReturnMessage(form_el);
                } else {
                    setReturnMessage(form_el, message);
                    showReturnMessage(form_el);
                }
            });
            //hide ajax loader
            hideLoader(form_el);
            return false;
        }

        function isSet(variable) {
            if (variable === "" || typeof(variable) === 'undefined')
                return false;
            return true;
        }

        function clearForm(form_el) {
            form_el.find('input[type=text]').val('');
            form_el.find('input[type=checkbox]').prop('checked', false);
            form_el.find('textarea').val('');
        }

        function showLoader(form_el) {
            form_el.find('.ajax-loader').fadeIn('fast');
        }

        function hideLoader(form_el) {
            form_el.find('.ajax-loader').fadeOut('fast');
        }

        function setReturnMessage(form_el, content) {
            if (!isSet(content))
                content = "Unspecified message.";
            form_el.find('.return-msg').html(content);
        }

        function showReturnMessage(form_el) {
            form_el.find('.return-msg').addClass('show-return-msg');
        }
        $('.return-msg').on('click', function(e) {
            $(this).removeClass('show-return-msg').html('&nbsp;');
        });
    });
});