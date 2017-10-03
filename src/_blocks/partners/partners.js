if (window.innerWidth < 768) {
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".partners__wrap .slider__btn--prev"),
    nextArrow: $(".partners__wrap .slider__btn--next"),
  });
}
