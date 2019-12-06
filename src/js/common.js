$(document).ready(function() {

	$('input[type=tel]').inputmask({
		"mask": "+7 (999) 999-99-99"
	});


	$(function() {
		$('.js-image-popup').magnificPopup({
			type: 'image',
			fixedContentPos: false,
			zoom: {
				enabled: true,
				duration: 300
			}
		});
	});

	//= ../blocks/header/header.js

	//= ../blocks/promo/promo.js

	//= ../blocks/modal/modal.js

	wow = new WOW(
	{
	  boxClass: 'wow', 
	  animateClass: 'animated', 
	  offset: 0, 
	  mobile: false, 
	  live: true 
	});
	wow.init();
	

// scroll to block
// $('a[href^="#contacts-us"]').click(function(){
//   var target = $(this).attr('href');
//   $('html, body').animate({scrollTop: $(target).offset().top -95}, 500);
//   return false;
// });



});