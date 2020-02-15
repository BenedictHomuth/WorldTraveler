//Leaflet Map implementation

const myMap = L.map('leafletMap');
function createMap(lat, lon){
    myMap.setView([lat, lon], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(myMap);
   /*
    const myMarker = L.marker([lat,lon]).addTo(myMap);
    myMarker.bindTooltip("You're here!").openTooltip();
    */
    getMarker();
    myMap.on('click', addMarker);
        
    //To load tiles better. Don't know why this works
    //https://stackoverflow.com/questions/31454717/leaflet-only-loads-one-tile
    setTimeout(function () {
        myMap.invalidateSize();
    }, 0);
}

const lat = 51.509865;
const lon = -0.118092;
createMap(lat,lon);

function addMarker(e){
    // Add marker to map at click location; add popup window
    var newMarker = new L.marker(e.latlng).addTo(myMap);
    var cityName = prompt("Please enter the city name: ",'');
    newMarker.bindTooltip(cityName);

    saveMarker(e.latlng, cityName);
}

function saveMarker(latlon, cityName){
    //prepare json
    const data = {
        lat: latlon.lat,
        lon: latlon.lng,
        cityName: cityName
    }

    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        //Prepare the request body
        body: JSON.stringify(data)
    }
    //make the request to the server and safe the response in variable
    fetch("/api/safeMarker", options)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
}

function getMarker(){
    fetch("/api/getMarker")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      initializeMapMarker(myJson);
      return;
    });
}

function initializeMapMarker(markers){
    for(var i = 0; i < markers.length; i++){
        const marker = L.marker([markers[i].lat,markers[i].lon]).addTo(myMap);
        marker.bindTooltip(markers[i].cityName);
    }
    return;
}