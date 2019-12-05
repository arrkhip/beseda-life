//header mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('open');
	$('.header__inner').toggleClass('open');
	$('body').toggleClass('scroll-hidden');
});


//header fixed
$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.header').addClass('header--fixed');
    }
    else {
        $('.header').removeClass('header--fixed');
    }
});


// header social
$('.js-header__social-call').magnificPopup({
	type: 'inline',
	preloader: false,
	closeBtnInside: false,
	fixedContentPos: false,
	mainClass: 'mfp-social',

  callbacks: {
    open: function() {  
      $('body, html').addClass('body-no-scroll');
    },                                        

    close: function() { 
      $('body, html').removeClass('body-no-scroll');   
    },                                        
  }
});
