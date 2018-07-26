var map;
var infowindow;

navigator.geolocation.getCurrentPosition(initMap);

function initMap(position) {
    //  mapa con las coordenadas actuales
    var lat = position.coords.latitude;
    var lng = position.coords.longitude
    var pyrmont = {lat, lng};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat, lng},
    zoom: 15
  });
  
  infowindow = new google.maps.InfoWindow();
  //Creamos el servicio PlaceService y enviamos la petición
   var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
     //  localización, el radio y el tipo de lugar a obtener 
    location: pyrmont,
    radius: 500,
    // types le pasamos un array con los tipos de búsqueda que queremos hacer
    type: ['restaurant']
  }, callback);


  function callback(results, status) {
    
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]); 
        console.log(results);
      }

    }
  }

  // marcador
  function createMarker(place) {
    
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    //el evento click del marcador
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      
      infowindow.open(map, this);
     
    });
  }
    
  }
  
