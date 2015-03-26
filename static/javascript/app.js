$('.header-control').click(function () {
  $('header, #content').toggleClass('open close');
  $('header').toggleClass('affix affix-top');
  $('.header-control .fa').toggleClass('fa-angle-up fa-angle-down');
});

$('.profile-image').click(function () {
  $(this).toggleClass('slide-in slide-out');
});

$('header').affix({
  offset: {
    top:500,
  }
});
$('header').on('affixed.bs.affix', function(){
  $("header, #content").addClass('fixed close');
  $("header, #content").removeClass('open');
  $('.header-control .fa').toggleClass('fa-angle-up fa-angle-down');
});

$('header').on('affixed-top.bs.affix', function(){
  $("header, #content").removeClass('fixed close');
  $('.header-control .fa').toggleClass('fa-angle-up fa-angle-down');

});