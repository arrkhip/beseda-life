//header mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('open');
	$('.header__menu').toggleClass('open');
	$('body').toggleClass('scroll-hidden');
});


//header fixed
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('header--fixed');
    }
    else {
        $('.header').removeClass('header--fixed');
    }
});

