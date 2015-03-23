//Sliding Navigation
//$(document).ready(function(){
//  $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function (e) {
//    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
//    e.preventDefault();
//  });
//});

//Fullscreen Navigation
$(document).ready(function () {
  $('.nav-menu').on('click', function (e) {
    $('.nav-menu').toggleClass('bt-menu-open');
    e.preventDefault();
  });
});


//Fullscreen Background Video
//$(function(){
//  $.okvideo({ 
//    source: 'IqTtV-LsTqY', 
//    volume: 0, 
//    loop: true,
//    hd:true, 
//    adproof: true,
//    annotations: false,
//    onFinished: function() { console.log('finished') },
//    unstarted: function() { console.log('unstarted') },
//    onReady: function() { console.log('onready') },
//    onPlay: function() { console.log('onplay') },
//    onPause: function() { console.log('pause') },
//    buffering: function() { console.log('buffering') },
//    cued: function() { console.log('cued') },
// });
//});


//jQuery(function(){
//    jQuery(".player").mb_YTPlayer();
//});
//$('document').ready(function() {
//	var options = { videoId: 'ab0TSkLe-E0', start: 3 };
//	$('.video-bg').tubular(options);
//	// f-UGhWj1xww cool sepia hd
//	// 49SKbS7Xwf4 beautiful barn sepia
//});

//$().ready(function() {
//      $('#wrapper').tubular({videoId: 'IqTtV-LsTqY'}); // where idOfYourVideo is the YouTube ID.
//});

