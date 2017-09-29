 $(".popup__close").on("click", function(){
    $(this).closest(".popup").removeClass("popup--active");
    })

  $(window).on("keydown", function(e){
    if (e.which == "27") {
      $(".popup--active").each(function(){
        $(this).find(".popup__close").trigger("click");
      });
    }
  });
