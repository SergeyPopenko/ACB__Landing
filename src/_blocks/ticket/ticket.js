if ($(".countdown").length) {
  $(".countdown").downCount({
    date: "10/21/2017 19:00:00",
    offset: +3
  });
}

(function(){
  var flag = 1;
  $(window).on("scroll", function(){
    if (flag) {
      if ($(this).scrollTop() + window.innerHeight - $(".ticket").outerHeight()/2 > $(".ticket").offset().top) {
        flag = 0;
        $(".ticket").addClass("active");
      }
    }
  });
})();
