$(document).ready(function() {
  if ($('.map-canvas').length <= 0) {
    return;
  }

  var mapCanvas = document.getElementsByClassName('map-canvas')[0];

  var mapOptions = {
    center: new google.maps.LatLng(-33.875, 151.136),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // ROADMAP, SATELLITE, HYBRID, TERRAIN
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: { lat: -33.875, lng: 151.136 },
      map: map,
      label: 'M' 
    });

  var infowindow = new google.maps.InfoWindow({
      content: "<h1>My Marker</h1><p>This is my marker</p>"
    });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  $('.uluru').on('click', function() {
      map.setCenter({
        lat: -25.363,
        lng: 131.044
        });
    });
});