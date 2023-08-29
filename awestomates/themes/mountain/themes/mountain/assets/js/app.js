/*
*	Mountain - Coming Soon & Under Construction Hugo Theme
*	Version: 1.0.0
*	Author: Mountain-Themes
*	Author URL: https://themeforest.net/user/mountain-themes
*	Mountain © 2022. Design & Coded by Mountain-Themes.
*/

/* TABLE OF CONTENTS
	1. Page Loader
	2. Countdown
	3. MailChimp
	4. Contact form 
	5. Mobile Menu
	6. Parallax
	7. Wow
	8. Google map


*/

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
  
	  mt_page_loader();
	  mt_countdown();
	  mt_mailchimp();
	  mt_contact_form ();
	  mt_mobile_menu();
	  mt_parallax();
	  mt_wow();
	  mt_google_map();
	  
/* ================================= */
/* :::::::: 1. Page Loader ::::::::: */
/* ================================= */

	function mt_page_loader() {
		$(".loader-icon").delay(500).fadeOut();
		$(".page-loader").delay(700).fadeOut("slow");
		
	} 

/* ================================= */
/* :::::::: 2. Countdown ::::::::::: */
/* ================================= */

	function mt_countdown() {
	
		$('.countdown').each( function() {
			$(this).countdown({
			  date: $(this).attr('data-timer'),
			  render: function(data) {
				$(this.el).html("<div>"  + this.leadingZeros(data.days, 3) + " <span>days</span></div><div class='border_clock'>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div class='border_clock'>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div class='border_clock'>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
			}
			
			});
		  });

	}

/* ================================= */
/* ::::::: 3. MailChimp :::::::::::: */
/* ================================= */

	function mt_mailchimp() {

		if ($('.section-subscribe').length) {

			// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
			$('#ajaxChimp').ajaxChimp({
				language: 'eng',
				url: mailChimpURL
			});

			// Mailchimp translation
			//
			// Defaults:
			//'submit': 'Submitting...',
			//  0: 'We have sent you a confirmation email',
			//  1: 'Please enter a value',
			//  2: 'An email address must contain a single @',
			//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
			//  4: 'The username portion of the email address is invalid (the portion before the @: )',
			//  5: 'This email address looks fake or invalid. Please enter a real email address'

			$.ajaxChimp.translations.eng = {
				'submit': 'Submitting...',
				0: '<i class="fa fa-check"></i> We will be in touch soon!',
				1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
				2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
				3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
				4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
				5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
			}

		}
	}

/* ================================= */
/* :::::: 4. Contact form :::::::::: */
/* ================================= */

function mt_contact_form() {
	
		// validate and process form here 
		$("#contact-form").validate({

			rules: {

				name: {
					required: true,
				},

				email: {
					required: true,
					email: true,
				},

				msg: {
					required: true,
				},
			},

			messages: {

				name: {
					required: "<i class='fa fa-exclamation-triangle name'></i>",
				},

				email: {
					required: "<i class='fa fa-exclamation-triangle email'></i>",
					email: "<i class='fa fa-exclamation-triangle email'></i>",
				},

				msg: {
					required: "<i class='fa fa-exclamation-triangle message'></i>",
				},

			},

		});

}

/* ================================= */
/* ::::::: 5. Mobile Menu :::::::::: */
/* ================================= */

function mt_mobile_menu() {

    $(".menu-container").slicknav({
        prependTo: 'header .mobile-menu',
        allowParentLinks: false
      });
}  

/* ================================= */
/* ::::::::: 6. Parallax ::::::::::: */
/* ================================= */

function mt_parallax() {

    $('.section-subscribe').jarallax({
		speed: 0.5
	});
} 

/* ================================= */
/* :::::::::::: 7. Wow ::::::::::::: */
/* ================================= */

function mt_wow() {
	var wow = new WOW(
		{
		  mobile: false, // trigger animations on mobile devices (default is true)
		}
	  );
	  wow.init();
} 

/* ================================= */
/* :::::::: 8. Google Map :::::::::: */
/* ================================= */

function mt_google_map() {

	if ($('#google-container').length) {

		//set your google maps parameters
		var latitude = latitudeG,
			longitude = longitudeG,
			map_zoom = mapZoomG;

		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = (is_internetExplorer11) ? iconLocation : iconLocation;

		//define the basic color of your map, plus a value for saturation and brightness
		var main_color = colorMap,
			saturation_value = -20,
			brightness_value = 5;

		//we define here the style of the map
		var style = [{
				//set saturation for the labels on the map
				elementType: "labels",
				stylers: [{
					saturation: saturation_value
				}, ]
			}, { //poi stands for point of interest - don't show these lables on the map 
				featureType: "poi",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show highways lables on the map
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show local road lables on the map
				featureType: "road.local",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show arterial road lables on the map
				featureType: "road.arterial",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show road lables on the map
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [{
					visibility: "off"
				}, ]
			},
			//style different elements on the map
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.government",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.attraction",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.business",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "transit.station",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "landscape",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]

			}, {
				featureType: "road",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "water",
				elementType: "geometry",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}
		];

		//set google map options
		var map_options = {
				center: new google.maps.LatLng(latitude, longitude),
				zoom: map_zoom,
				panControl: false,
				zoomControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				styles: style,
			}
			//inizialize the map
		var map = new google.maps.Map(document.getElementById('google-container'), map_options);
		//add a custom marker to the map        




		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			title: titleIconLocation,
			visible: true,
			icon: marker_url,
		});



		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});

		//add custom buttons for the zoom-in/zoom-out on the map
		function CustomZoomControl(controlDiv, map) {
			//grap the zoom elements from the DOM and insert them in the map 
			var controlUIzoomIn = document.getElementById('zoom-in'),
				controlUIzoomOut = document.getElementById('zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			// Setup the click event listeners and zoom-in or out according to the clicked element
			google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
				map.setZoom(map.getZoom() + 1)
			});
			google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
				map.setZoom(map.getZoom() - 1)
			});
		}

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new CustomZoomControl(zoomControlDiv, map);

		//insert the zoom div on the top left of the map
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

	}

}

});
