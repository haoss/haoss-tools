$(document).ready(function() {

	// Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
  } catch(err) {};

	// Scroll Events
	function headerActive(){
		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};
	}
	headerActive();
	$(window).scroll(headerActive);

	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});

	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');

	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');
	});

  // Menu For Xs Mobile Screens
  if ($(window).height() < 450) {
  	$('#slide_out_menu').addClass('xs-screen');
  }

  $(window).on('resize', function(){
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    } else{
    	$('#slide_out_menu').removeClass('xs-screen');
    }
  });

  // Magnific Popup
  $(".lightbox").magnificPopup();

	// Apple btn
	var appleBtn = $('#apple-btn'),
			appleBtnTl = new TimelineMax();

	TweenMax.set(appleBtn, {autoAlpha: 0, y: '-10px'});

	appleBtnTl
		.to(appleBtn, 1, {autoAlpha: 1, y: '0px', ease: Power1.easeOut}, 1)
		.from('#apple-btn i', 1, {autoAlpha: 0, x: '10px', ease: Power1.easeOut})
		.from('#apple-btn span', 1, {autoAlpha: 0, x: '10px', ease: Power1.easeOut});

	// Scroll Magic
	var controller = new ScrollMagic.Controller();

	var headerTl = new TimelineMax();
	headerTl
		.from('#header h1', 1, {autoAlpha: 0, y: '50px'})
		.from('#header p', 1, {autoAlpha: 0, y: '50px'}, 0.2)
		.from('#header .btn', 1, {autoAlpha: 0, y: '50px'}, 0.3)
		.from('#header .header_iphone', 1, {y: '100%', ease:Power1.easeOut}, 0.4);
	var headerScene = new ScrollMagic.Scene({
		triggerElement: '#header',
		//triggerHook: 0.3,
		// duration: '100%'
	})
		.setTween(headerTl)
		.addTo(controller);

	var featuresTl = TweenMax.from('#features .feature', 1, {autoAlpha: 1, y: '150%', ease: Power1.easeOut});
	var featuresScene = new ScrollMagic.Scene({
		triggerElement: '#features',
		// duration: '100%'
	})
		.setTween(featuresTl)
		// .addIndicators({
		// 	name: 'fade scene',
		// 	colorTrigger: 'black',
		// 	indent: 20, // Отступ от правой стороны браузера
		// 	colorStart: 'green',
		// 	colorEnd: 'red'
		// })
		.addTo(controller);

	var iphoneFeatureTl = new TimelineMax();
	iphoneFeatureTl
		.from('#iphone-feature .iphone-showcase', 1, {autoAlpha: 0, x: '-100%', ease: Power1.easeOut})
		.from('#iphone-feature h2', 1, {autoAlpha: 0, y: '50px'}, 0)
		.from('#iphone-feature p', 1, {autoAlpha: 0, y: '50px'}, 0.2)
		.from('#iphone-feature .btns-container', 1, {autoAlpha: 0, y: '50px'}, 0.4);

	var iphoneFeatureScene = new ScrollMagic.Scene({
		triggerElement: '#iphone-feature',
		duration: '100%',
		//triggerHook: 0
		// offset: 100
	})
		.setClassToggle('#iphone-feature', 'is-active')
		.setTween(iphoneFeatureTl)
		//.setPin('#iphone-feature')
		// .addIndicators({
		// 	name: 'fade scene',
		// 	colorTrigger: 'black',
		// 	indent: 20, // Отступ от правой стороны браузера
		// 	colorStart: 'green',
		// 	colorEnd: 'red'
		// })
		.addTo(controller);

	var mapFeatureTl = new TimelineMax();
	mapFeatureTl
		.from('#map-feature .map-showcase', 1, {autoAlpha: 0, x: '100%', ease: Power1.easeOut})
		.from('#map-feature h2', 1, {autoAlpha: 0, y: '50px'}, 0)
		.from('#map-feature p', 1, {autoAlpha: 0, y: '50px'}, 0.2)
		.from('#map-feature .partners', 1, {autoAlpha: 0, y: '50px'}, 0.4);

	var mapFeatureScene = new ScrollMagic.Scene({
		triggerElement: '#map-feature',
		duration: '100%'
		// offset: 100
	})
		.setClassToggle('#map-feature', 'is-active')
		.setTween(mapFeatureTl)
		// .addIndicators({
		// 		name: 'fade scene',
		// 		colorTrigger: 'black',
		// 		indent: 20, // Отступ от правой стороны браузера
		// 		colorStart: 'green',
		// 		colorEnd: 'red'
		// 	})
		.addTo(controller);

	var iphoneScreensTl = TweenMax.fromTo('#iphone-screens .images-showcase', 1, {autoAlpha: 0, y: '-100px'}, {autoAlpha: 1, y: '0px', ease: Power1.easeOut});

	var iphoneScreensScene = new ScrollMagic.Scene({
		triggerElement: '#iphone-screens',
		// offset: 150
	})
		.setTween(iphoneScreensTl)
		// .addIndicators({
		// 		name: 'fade scene',
		// 		colorTrigger: 'black',
		// 		indent: 20, // Отступ от правой стороны браузера
		// 		colorStart: 'green',
		// 		colorEnd: 'red'
		// 	})
		.addTo(controller);

		var readyToBuyScene = new ScrollMagic.Scene({
			triggerElement: '#ready-to-buy',
			triggerHook: 0.1,
			duration: 300
		})
			.setPin('#ready-to-buy', {pushFollowers: true})
			// .addIndicators({
			// 	name: 'fade scene',
			// 	colorTrigger: 'black',
			// 	indent: 20, //Отступ от правой стороны браузера
			// 	colorStart: 'green',
			// 	colorEnd: 'red'
			// })
			.addTo(controller);

	// Parralax
	$('#header_iphone').parallax({
		scalarX: 5,
		scalarY: 0
	});

	$('#images-showcase-list').parallax({
		scalarX: 2
	});

});
