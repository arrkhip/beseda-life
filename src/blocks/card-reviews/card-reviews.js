// card-reviews show more information
$('.js-card-reviews__more').click(function() {
	$(this).find('span').toggleClass('hidden');
	$(this).parent().find('.card-reviews__descr').toggleClass('open');
});