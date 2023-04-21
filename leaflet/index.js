
// // * Medir tiempos de renderizado de los marcadores en el mapa // //
let startTime = performance.now();

let map = L.map('map').setView([39.93472, 116.4336], 13);

let endTime = performance.now();
let diff = endTime - startTime;

console.log("El mapa tardó " + diff + " milisegundos en renderizarse.");
//L.setLocale("es"); // initialize the map and set its view to our chosen geographical coordinates and a zoom level:

// [latitud, longitud], zoom

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circle = L.circle([39.9112879,116.3764966], {
    color: 'black',
    fillColor: '#92A75B',
    fillOpacity: 0.5,
    radius: 500 //meters
}).addTo(map);


let popup = L.popup()

// // * Obtener coordenadas de un punto en especifico. // //
function onMapClick(e) {
    console.log(e.latlng)
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// // * Obtener las coordenadas de un área especifica // //

function gettingBounds() {
    let bounds = map.getBounds();
    return bounds;
}

let rectangle = gettingBounds();
console.log('los bordes son: ', rectangle)

let latA = rectangle._northEast.lat;
let lonA = rectangle._northEast.lng;

let latB = rectangle._southWest.lat;
let lonB = rectangle._southWest.lng;

console.log(latA, lonA)


// // * Agregar marcadores en el mapa (mas de uno) // //
let NEmarker = L.marker([latA, lonA]).addTo(map);
let SOmarker = L.marker([latB, lonB]).addTo(map);
let marker = L.marker([39.9112879,116.3764966]).addTo(map);
marker.bindPopup("<b>Heng Er Tiao, Xi Cheng Qu, Bei Jing Shi, China, 100031</b>.").openPopup(); //openPopup method (for markers only) immediately opens the attached popup.


// // * Configurar iconos como marcadores en el mapa  // //

let taxiIcon = L.icon({
    iconUrl: './assets/taxi.png',
    iconSize:[50, 65], // size of the icon
    iconAnchor:[30, 90], // point of the icon which will correspond to marker's location
    popupAnchor:[-3, -76] // point from which the popup should open relative to the iconAnchor
});

let taxi = L.marker([39.93472, 116.4336], {icon: taxiIcon}).addTo(map);
taxi.bindPopup("FCKL-4964")

let taxiLatLon = taxi.getLatLng();
console.log('El taxi está en: ', taxiLatLon)

let resTaxi = rectangle.contains(taxi.getLatLng());
console.log(resTaxi)

// // * Al hacer click e un marcador en el mapa se haga ZoomIn alrededor del mismo // //
function zoomClick(e) {
    let coor = e.latlng;
    console.log(coor)
    map.setView([coor.lat, coor.lng], 20)
}

map.on('click', zoomClick);


// // * Eliminar marcadores del mapa // //

// // * Actualizacion constante del mapa (renderizado de 5 diferentes elementos por pagina) // //

