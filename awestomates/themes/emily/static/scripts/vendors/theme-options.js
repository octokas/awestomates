jQuery(document).ready(function($) {


    var theme_options_content = ' \
        <h4>Option Panel</h4> \
        <a class="switcher_btn" href="#"></a> \
        <br> \
         <a class="switcher_btn" href="#"><i class="pe-paint-bucket"></i></a> \
        <a href="#" class="btn btn-color"><span>Purchase</span></a> \
        <h5>Change Color</h5> \
        <div class="colors clearfix"> \
            <a id="color1" href="#" data-style="blue"></a> \
            <a id="color2" href="#" data-style="pink"></a> \
            <a id="color3" href="#" data-style="yellow"></a> \
        </div> \
    \ ';
    
    $('#theme-options').prepend(theme_options_content);
    
    $('#theme-options > a.switcher_btn').on('click', function(e) {
        
        e.preventDefault();

        $('#theme-options').toggleClass('open');
        
    });
    
    
    var link = $('link[data-style="styles"]');
    var startup_auto_colors = $.cookie('startup_auto_colors');
    // alert(startup_auto_colors)
        

    if (!($.cookie('startup_auto_colors'))) {
        
        $.cookie('startup_auto_colors', 'blue', 457);     
        startup_auto_colors = $.cookie('startup_auto_colors');
       $('.index-img').css('background-image', 'url(img/index-' + startup_auto_colors + '.jpg)');
        link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
        $('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css');
                $('.jarallax').jarallax('destroy');

        $('.jarallax').jarallax({
            speed: 0.2,
            noAndroid: true
        });
        
    } else {
                
        link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
        $('.index-img').css('background-image', 'url(img/index-' + startup_auto_colors + '.jpg)');
        $('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css'); 
                $('.jarallax').jarallax('destroy');

        $('.jarallax').jarallax({
            speed: 0.2,
            noAndroid: true
        });    
        
    };


    /************************/
    // Change Color
    /************************/ 
    $('#theme-options .colors a').on('click',function(e) {
        
        var $this = $(this),
            startup_auto_colors = $this.data('style');
            
        e.preventDefault();

        $('.jarallax').jarallax('destroy');

        $('.jarallax').jarallax({
            speed: 0.2,
            noAndroid: true
        });
        
        link.attr('href', 'css/colors/' + startup_auto_colors + '.css');
        $('.index-img').css('background-image', 'url(img/index-' + startup_auto_colors + '.jpg)');
        $('#changeable-colors').attr('href', 'css/colors/' + startup_auto_colors + '.css');     
        $.cookie('startup_auto_colors', startup_auto_colors, 457);
         
    });


});
