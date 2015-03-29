
//$('.affix-top.header-control').click(function(){
//    $('html, body').animate({
//        scrollTop: $('#content').offset().top
//    });
//    
//});


// Jump back to top
$('#header-control').click(function(){
  if(
    $('#header-control').hasClass('open')
  ){
    $('html, body').animate({
        scrollTop: $('#header-control').offset().top
    });
  } else {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    });
  }

});

// Make  fixed
$('header').affix({
  offset: {
    top:500,
  }
});
$('header').on('affixed.bs.affix', function(){
  $("#header-control").addClass('fixed close');
  $("#header-control").removeClass('open');
  $('.header-control .fa').toggleClass('fa-angle-up fa-angle-down');
});

$('header').on('affixed-top.bs.affix', function(){
  $("#header-control").addClass('open');
  $("#header-control").removeClass('fixed close');
  $('.header-control .fa').toggleClass('fa-angle-up fa-angle-down');

});



//slide away Profile Image and reveal address
$('.profile-image').click(function () {
  $(this).toggleClass('slide-in slide-out');
});

