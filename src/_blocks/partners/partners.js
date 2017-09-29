if (window.innerWidth < 768) {
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".partners__slider-wrap .slider__btn--prev"),
    nextArrow: $(".partners__slider-wrap .slider__btn--next"),
  });
}
