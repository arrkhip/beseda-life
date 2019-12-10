// accordion
$(function() {
	var caption = $('.js-accordion__header'),
			content = $('.accordion__body');   

	caption.click(function(e) {
		$(this).toggleClass('active');
		$(this).next(content).slideToggle(300);
	});
});