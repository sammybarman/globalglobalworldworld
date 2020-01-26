$(document).ready(function(){
  $('.sidenav').sidenav({
    edge: 'right'
  });
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({
    scrollOffset: 100,
    throttle: 30
  });
  $('.materialboxed').materialbox();
  $('.fixed-action-btn').floatingActionButton();
  $('.tap-target').tapTarget();
  $('.tooltipped').tooltip();
  $('.carousel').carousel();
});

$('.dropdown-trigger').dropdown({
  coverTrigger: false,
  hover: true,
  constrainWidth: false
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
var autoplay = true;
setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 2000);
$('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });

var top1 = $('#sec1').offset().top - 200;
$(window).scroll(function(){

  if($(window).scrollTop()>top1){
    $('nav').addClass('bg');
    // $('.brand-logo').addClass('black-text');
    $('.forjq').addClass('bg2');
  }else{
    $('nav').removeClass('bg');
    // $('.brand-logo').removeClass('black-text');
    $('.forjq').removeClass('bg2');
  }
});
