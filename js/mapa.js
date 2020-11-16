var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -22.965910, lng: -43.217938},
    zoom: 17
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -22.965910, lng: -43.217938},
    title: "Endereço da Xuxa",
    map: mapa
  });

}