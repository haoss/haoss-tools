'use strict';

// Document ready
$(document).ready(function(){

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
  } catch(err) {};

  // Round block
  var propertiesRoundBlock = $('.properties__round__block');
  propertiesRoundBlock.on('click', function(){
    propertiesRoundBlock.removeClass('is-active');
    $(this).addClass('is-active');
  });

  // Menu button
  var mobileClose = $('.mobile__close'),
      navButton = $('.nav__button'),
      mobileNavigation = $('.mobile__navigation');

  navButton.on('click', function(){
    $(this).toggleClass('is-active');
    mobileNavigation.toggleClass('is-active');
  });
  mobileClose.on('click', function(){
    mobileNavigation.toggleClass('is-active');
    navButton.toggleClass('is-active');
  });

  $(window).resize(function(){
    var width = $(window).width();

    if (width > 991) {
      mobileNavigation.removeClass('is-active');
      navButton.removeClass('is-active');
    }
  });

});

// Scroll header active
function header(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 50) {
    $('header.header').addClass('is-scroll')
  } else {
    $('header.header').removeClass('is-scroll')
  }

  // console.log(scroll);
};
$(document).ready(header);
$(window).scroll(header);

// Scroll Magic controller destroy
function scrollDestroy(){
  // Scroll animation
  var controller = new ScrollMagic.Controller(),
      header = $('.header'),
      headerTl = new TimelineMax(),
      iphone2 = $('.iphone2'),
      propertiesTl = new TimelineMax(),
      propertiesRound = $('.properties__round');

  // 1 scene
  headerTl
    .to(header, 1, {autoAlpha: 1})
    .to('.appicon', 1, {autoAlpha: 1, ease: Power1.easeInOut}, 0)
    .to('.helps__wrapper .h1', 1, {autoAlpha: 1, y: '20px', ease: Power1.easeInOut}, 0)
    .to('.helps__wrapper p', 1, {autoAlpha: 1, y: '20px', ease: Power1.easeInOut}, 0)
    .to('.helps__wrapper .applinks', 1, {autoAlpha: 1, y: '20px', ease: Power1.easeInOut}, 0)
    .to('.iphone1', 0.5, {autoAlpha: 1, x: '15px', ease: Power1.easeInOut})
    .to('.helps__layer .layer--1', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    .to('.helps__layer .layer--2', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    .to('.helps__layer .layer--4', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    .to('.helps__layer .layer--3', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    .to('.helps__layer .layer--5', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
  ;

  var headerScene = new ScrollMagic.Scene({
    triggerElement: header
  })
    .setTween(headerTl)
    // .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"})
    .addTo(controller);

  // 2 scene
  propertiesTl
    .to(iphone2, 1, {autoAlpha: 1, x: '-10px'})
    .to(propertiesRound, 1, {autoAlpha: 1}, '-=0.5')
    .staggerTo([$('.properties__round__block--1'), $('.properties__round__block--2'), $('.properties__round__block--3'), $('.properties__round__block--4'), $('.properties__round__block--5')], 0.1, {autoAlpha: 1}, 0.1)

    .set($('.properties__round__block'), {className: '-=is-active'})
    .set($('.properties__text'), {className: '-=is-active'})
    .staggerTo([$('.properties__round__block--3'), $('.properties__text')], 0.1, {className: '+=is-active'})
  ;

  var propertiesScene = new ScrollMagic.Scene({
    triggerElement: '#properties'
  })
    .setTween(propertiesTl)
    // .addIndicators({
    // 	name: 'fade scene',
    // 	colorTrigger: 'black',
    // 	indent: 20, // Отступ от правой стороны браузера
    // 	colorStart: 'green',
    // 	colorEnd: 'red'
    // })
    .addTo(controller);

  // 3 Scene
  var planTl = new TimelineMax();
  planTl
    .from('.plan__header', 0.5, {autoAlpha: 0, y: '-10px', ease: Power1.ease})
    // .to('.plan__layer .layer--1', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    // .to('.plan__layer .layer--2', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    // .to('.plan__layer .layer--4', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    // .to('.plan__layer .layer--3', 0.3, {autoAlpha: 1, y: '10px', ease: Power1.ease})
    .to('.iphone3 img:nth-child(2)', 1, {autoAlpha: 1, y: '-10px', ease: Power1.easeInOut})
    .to('.iphone3 img:first-child', 1, {autoAlpha: 1, y: '-10px', ease: Power1.easeIn}, 'ease')
    .to('.iphone3 img:last-child', 1, {autoAlpha: 1, y: '-10px', ease: Power1.easeIn}, 'ease', '+=2')
  ;

  var planScene = new ScrollMagic.Scene({
    triggerElement: '.plan',
    // duration: '50%',
    // offset: 100
  })
    .setTween(planTl)
    // .setClassToggle('.plan', 'is-active')
    // .addIndicators({
    // 	name: 'fade scene',
    // 	colorTrigger: 'black',
    // 	indent: 20, // Отступ от правой стороны браузера
    // 	colorStart: 'green',
    // 	colorEnd: 'red'
    // })
    .addTo(controller)
  ;

  // 4 Scene
  var manageTl = new TimelineMax();
  manageTl
    .from($('.manage__text'), 1, {autoAlpha: 0, y: '-20px', ease: Power1.ease})
    .from($('.manage .img-responsive'), 1, {autoAlpha: 0, y: '-20px', ease: Power1.ease})
  ;
  var manageScene = new ScrollMagic.Scene({
    triggerElement: '.manage'
  })
    .setTween(manageTl)
    .addTo(controller)
  ;

  // parallax
  $('.scene').parallax({
    scalarX: 2,
    scalarY: 2
  });

  // 5 Scene
  var footerScene = new ScrollMagic.Scene({
    triggerElement: '.footer',
    triggerHook: 0.8
  })
    .setTween(TweenMax.from($('.footer__text'), 1.5, {autoAlpha: 0, y: '-20px', ease: Power1.ease}))
    .addTo(controller);

  // parallax
  $('.scene').parallax({
    scalarX: 2,
    scalarY: 2
  });

  var width = $(window).width();

  if (width < 1199) {
    controller.destroy(true);
    $('.scene').parallax('disable');
    $('.properties__round__block').removeClass('is-active');
    $('.properties__round__block--3').addClass('is-active');
  } else if (width >= 1200) {
    // $('.properties__round__block--3').removeClass('is-active');
  }

}

$(document).ready(scrollDestroy);
// $(window).load(scrollDestroy);

$(window).on('load', function() {
  // $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});
