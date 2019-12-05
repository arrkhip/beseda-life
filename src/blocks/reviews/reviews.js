var mySwiper = undefined;
function initSwiper() {
  var screenWidth = $(window).width();
  if(screenWidth < 576 && mySwiper == undefined) {          
    mySwiper = new Swiper('.reviews__slider', {            
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.reviews__arrow-next',
        prevEl: '.reviews__arrow-prev',
      },
    });
  } else if (screenWidth > 576 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
    jQuery('.swiper-wrapper').removeAttr('style');
    jQuery('.swiper-slide').removeAttr('style');            
  }        
}

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
  initSwiper();        
});