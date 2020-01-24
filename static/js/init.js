$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
  $('.fixed-action-btn').floatingActionButton();
  $('.tap-target').tapTarget();
  $('.tooltipped').tooltip();
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

$(window).scroll(function(){

  if($(window).scrollTop()>20){
    $('nav').addClass('bg');
    $('.brand-logo').addClass('red-text');
    $('.forjq').addClass('bg2');
  }else{
    $('nav').removeClass('bg');
    $('.brand-logo').removeClass('red-text');
    $('.forjq').removeClass('bg2');
  }
});
