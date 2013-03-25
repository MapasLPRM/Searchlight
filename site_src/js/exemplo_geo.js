var map_geo;
function add_iti(data){
        var markerLocation = new L.LatLng(data.features[0].centroid.coordinates[1], data.features[0].centroid.coordinates[0]);
	    L.marker(markerLocation).addTo(map_geo);  
    
       // console.info(markerLocation); 
    }
function exemplo_geocoding() {
   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
 
   map_geo = L.map('map_geo',{layers:[CamadaBasica],center: UFES,zoom: 15});
   L.marker(UFES).addTo(map_geo)
        .bindPopup('UFES')
         .openPopup();

    geoCode("street:Av. Fernando Ferrari;city:vitoria","vitoria",add_iti);
    geoCode("street:BR-101 NORTE;city:serra:",'',add_iti);
    geoCode("street:RUA são domingos;city:serrA",'BR-101 NORTE',add_iti);

   
}

function geoCode(address, centro, callback) {
	var firstPart = 'http://geocoding.cloudmade.com/bbcf9165c23646efbb1828828278c8bc/geocoding/v2/find.geojs?query='
	var url = firstPart + encodeURI(address)
	$.ajax({
	  url: url,
	  success: callback,
      type:"POST",
      dataType: 'jsonp',
	})
}
 

