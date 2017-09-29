(function(){
  var flag = 1;
  $(window).on("scroll", function(){
    if (flag) {
      if ($(this).scrollTop() + window.innerHeight - $(".initiate").outerHeight()/2 > $(".initiate").offset().top) {
        flag = 0;
        $(".initiate").addClass("active");
      }
    }
  });
})();
