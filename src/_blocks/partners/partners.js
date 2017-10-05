// if (window.innerWidth < 481) {
//   $(".partners__slider").slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: false,
//     prevArrow: $(".partners__slider-wrap .slider__btn--prev"),
//     nextArrow: $(".partners__slider-wrap .slider__btn--next"),
//   });
// }

function partnersSliderInnit() {
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".partners__slider-wrap .slider__btn--prev"),
    nextArrow: $(".partners__slider-wrap .slider__btn--next"),
  });
}

function partnersSliderDestroy() {
  $(".partners__slider").slick("unslick")
}

$(window).on("resize", function(){
  if ($(".partners__slider.slick-initialized.slick-slider").length) {
    if (window.innerWidth > 480) {
      partnersSliderDestroy();
    }
  } else if(window.innerWidth < 481){
    partnersSliderInnit();
  }
});

$(window).ready(function(){
  if (window.innerWidth < 481) {
    partnersSliderInnit();
  }
});
