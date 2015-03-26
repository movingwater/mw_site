// Jump back to top
$('.header-control').click(function(){
    $('html, body').animate({
        scrollTop: $('body').offset().top
    });
    
});
//$('.affix-top.header-control').click(function(){
//    $('html, body').animate({
//        scrollTop: $('#content').offset().top
//    });
//    
//});

// Make Header fixed
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

//slide away Profile Image and reveal address
$('.profile-image').click(function () {
  $(this).toggleClass('slide-in slide-out');
});