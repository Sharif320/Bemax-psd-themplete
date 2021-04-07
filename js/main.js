(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
// 	});
// 	BasicSlider.slick({
// 		autoplay: true,
// 		dots:true,
// 		autoplaySpeed: 1000,
// 		dots: false,
// 		fade: true,
// 		arrows: false,
// 		responsive: [
// 			{ breakpoint: 767, settings: { dots: false, arrows: false,
// 			autoplay:true,
// 			dots:true
// 		} }
// 		]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 			var $this = $(this);
// 			var $animationDelay = $this.data('delay');
// 			var $animationType = 'animated ' + $this.data('animation');
// 			$this.css({
// 				'animation-delay': $animationDelay,
// 				'-webkit-animation-delay': $animationDelay
// 			});
// 			$this.addClass($animationType).one(animationEndEvents, function () {
// 				$this.removeClass($animationType);
// 			});
// 		});
// 	}
// }
// mainSlider();


// owlCarousel
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:3,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:true,
	autoplay:true,
	autoplaySpeed:1000,
	animationIn:true,
	animationOut:true,

	
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1,
			dots:true
        }
    }
})
// project slider 
$('.project-active').owlCarousel({
    loop:true,
    margin:0,

	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:true,
	autoplay:true,
	autoplaySpeed:1000,
	animationIn:true,
	animationOut:true,

	
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:4,
			dots:true
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe',
	iframe: {
		markup: '<div class="mfp-iframe-scaler">'+
				  '<div class="mfp-close"></div>'+
				  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
	  
		patterns: {
		  youtube: {
			index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
	  
			id: 'v=', // String that splits URL in a two parts, second part should be %id%
			// Or null - full URL will be returned
			// Or a function that should return %id%, for example:
			// id: function(url) { return 'parsed id'; }
	  
			src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
		  },
		
	  
		  // you may add here more sources
	  
		},
	  
		srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
	  }

	
});

// testimonial active 
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:0,

	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:true,
	autoplay:true,
	autoplaySpeed:1000,
	animationIn:true,
	animationOut:true,

	
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1,
			dots:true
        }
    }
})


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);