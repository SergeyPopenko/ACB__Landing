$(".fight__slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  prevArrow: $(".fight__slider-wrap .slider__btn--prev"),
  nextArrow: $(".fight__slider-wrap .slider__btn--next"),
  responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});
