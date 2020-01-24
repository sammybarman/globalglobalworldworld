$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
   $('.fixed-action-btn').floatingActionButton();
   $('.tap-target').tapTarget();
    $('.tooltipped').tooltip();
});

$(window).scroll(function(){

  if($(window).scrollTop()>20){
    $('nav').addClass('bg4');
    $('.brand-logo').addClass('red-text');
    $('.forjq').addClass('bg2');
  }else{
    $('nav').removeClass('bg4');
    $('.brand-logo').removeClass('red-text');
    $('.forjq').removeClass('bg2');
  }
});
