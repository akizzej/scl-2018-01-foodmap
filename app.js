function findMe(){
    let output = document.getElementById('map');
    // Verificar si soporta geolocalizacion
    if (navigator.geolocation) {
        output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
    }else{
        output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
    }
    //Obtenemos latitud y longitud
    function localizacion(posicion){
        let latitude = posicion.coords.latitude;
        let longitude = posicion.coords.longitude;
        let imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyDmCPHxsb3UDcZiJgRL7x4UkRP4Q9yCCqU";
        output.innerHTML ="<img src='"+imgURL+"'>";
        
    }
    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }
    navigator.geolocation.getCurrentPosition(localizacion,error);
}

