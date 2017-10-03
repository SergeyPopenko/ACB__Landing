// var iframe = document.getElementById('video');

// // $f == Froogaloop
// var player = $f(iframe);

// var playButton = document.getElementById("play-button");
// playButton.addEventListener("click", function() {
//   player.api("play");
// });

// var pauseButton = document.getElementById("pause-button");
// pauseButton.addEventListener("click", function() {
//   player.api("pause");
// });


(function(){
  var flag = 1;
  $(window).on("scroll", function(){
    if (flag) {
      if ($(this).scrollTop() + window.innerHeight - $(".video").outerHeight()/2 > $(".video").offset().top) {
        flag = 0;
        $(".video").addClass("active");
      }
    }
  });
})();
