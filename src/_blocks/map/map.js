// Map
if ($("#map").length) {
  var mapContainer = $("#map"),
      corX = +mapContainer.attr("data-map-x"),
      corY = +mapContainer.attr("data-map-y"),
      style = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"-3"},{"saturation":"-47"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"saturation":"0"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"-29"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aaaaaa"},{"visibility":"on"}]}],
      coordinates = {
        lat: corX,
        lng: corY
      },
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: coordinates,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: true,
        scrollwheel: true,
        styles: style
      });
  marker = new google.maps.Marker({
    position: coordinates,
    title: "УСК 'Крылья Советов'",
    zIndex: 1000
  });

  map.addListener("center_changed", function(){
    map.panTo(coordinates);
  });

  (function(){
    var flag = 1;
    $(window).on("scroll", function(){
      if (flag) {
        if ($(this).scrollTop() + window.innerHeight - $(".map").outerHeight()/2 > $(".map").offset().top) {
          flag = 0;
          marker.setAnimation(google.maps.Animation.DROP);
          marker.setMap(map);
        }
      }
    });
  })();
}
