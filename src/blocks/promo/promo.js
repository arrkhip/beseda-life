var swiper = new Swiper('.promo__slider', {
	effect: 'fade',
	speed: 600,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.promo__pagination',
		clickable: true,
	},
});