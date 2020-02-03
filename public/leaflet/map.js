//Leaflet Map implementation
function createMap(lat, lon){
    const mymap = L.map('leafletMap').setView([lat, lon], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(mymap);
    const myMarker = L.marker([lat,lon]).addTo(mymap);
    myMarker.bindTooltip("You're here!").openTooltip();
}

const lat = 51.509865;
const lon = -0.118092;
createMap(lat,lon);