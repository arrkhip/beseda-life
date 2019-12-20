// card-problem show more information
$('.js-card-problem__more').click(function() {
	$(this).find('span').toggleClass('hidden');
	$(this).parent().find('.card-problem__content').toggleClass('open');
});