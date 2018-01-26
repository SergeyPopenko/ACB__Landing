if ($(".countdown").length) {
  var countryOffset = new Date().getTimezoneOffset()/60,
      dateTime = document.querySelector(".ticket__address time").dateTime,
      tournamentDate = new Date(dateTime),
      tournamentDateString = "" + (tournamentDate.getMonth() + 1) + "/" + tournamentDate.getDate() + "/" + tournamentDate.getFullYear() + " " + tournamentDate.getHours() + ":" + tournamentDate.getMinutes() + ":" + tournamentDate.getSeconds();

  if (countryOffset < 0) {
    countryOffset = Math.abs(countryOffset);
  } else {
    countryOffset = -countryOffset;
  }

  $(".countdown").downCount({
    date: tournamentDateString,
    offset: countryOffset
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
