// accordion
// $(function() {
// 	var caption = $('.js-accordion__header'),
// 			content = $('.accordion__body', 'js-accordion__body');   

// 	caption.click(function(e) {
// 		$(this).toggleClass('active');
// 		$(this).next(content).slideToggle(300);
// 	});
// });

$(function () {
	var content = $('.accordion__body', 'js-accordion__body');   
	var caption = $('.js-accordion__header');
	
	caption.on('click', function() {
	      // закрытие активного пункта при клике на следующий
	      content.not($(this).next()).slideUp(500);
	      if ($(this).hasClass('active'))
	      {
	      	$(this).removeClass('active');
	      	$(this).next().slideToggle(400);
	      }
	      else
	      {
	      	caption.removeClass('active');
	      	caption.next().slideUp(400);
	      	$(this).next().slideToggle(400);
	      	$(this).addClass('active');
	      }
	    });
});