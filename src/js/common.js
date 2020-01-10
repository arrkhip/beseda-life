$(document).ready(function() {

	//= ../blocks/header/header.js
	//= ../blocks/accordion/accordion.js
	//= ../blocks/recall/recall.js
	//= ../blocks/staff/staff.js
	//= ../blocks/tabs/tabs.js
	//= ../blocks/services/services.js
	//= ../blocks/card-problem/card-problem.js
	//= ../blocks/card-reviews/card-reviews.js

	wow = new WOW(
	{
	  boxClass: 'wow', 
	  animateClass: 'animated', 
	  offset: 0, 
	  mobile: false, 
	  live: true 
	});
	wow.init();
	

$('#range-cost').rangeSlider(
  {
    direction: 'horizontal',
    // settings: true,
    skin: 'green',
    type: 'interval',
  },
  {
  	min: 1600,
  	max: 3000,
    step: 1,
    values: [1600, 2300],
  },
);

$('#range-experience').rangeSlider(
  {
    direction: 'horizontal',
    // settings: true,
    skin: 'green',
    type: 'interval',
    // scale: true,
  },
  {
  	min: 1,
  	max: 10,
    step: 1,
    values: [1, 5],
  },
);

});