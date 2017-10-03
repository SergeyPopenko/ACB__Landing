(function(){
  var flag = 1;
  $(window).on("scroll", function(){
    if (flag) {
      if ($(this).scrollTop() + window.innerHeight - $(".gallery").outerHeight()/2 > $(".gallery").offset().top) {
        flag = 0;
        $(".gallery").addClass("active");
      }
    }
  });
})();

if (window.innerWidth < 768) {
  $(".gallery__slider").slick({
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    centerPadding: "18%",
    responsive: [
        {
          breakpoint: 481,
          settings: {
            centerPadding: "30px"
          }
        }
      ]
  });
}

// if (window.innerWidth < 768) {
//   $(".partners__slider").slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: false,
//     prevArrow: $(".partners__slider-wrap .slider__btn--prev"),
//     nextArrow: $(".partners__slider-wrap .slider__btn--next"),
//   });
// }
