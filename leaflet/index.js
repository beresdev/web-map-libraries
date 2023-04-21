let map = L.map('map').setView([39.93472, 116.4336], 20);
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

// circle.bindPopup("500m around Heng Er Tiao, Xi Cheng Qu");

// let polygon = L.polygon([
//     [40.007336, 116.273302], // UppLeft
//     [40.012225, 116.484832], //UppRight
//     [39.948698, 116.535155], //downLeft
//     [39.930353, 116.212430] //DownRight
// ]).addTo(map);

// polygon.bindPopup("I am a polygon.");

let popup = L.popup()
    .setLatLng([39.924592, 116.212770])
    .setContent("Jinyuan Bridge (standalone popup)")
    .openOn(map); // openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one.



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
console.log(rectangle)

let latA = rectangle._northEast.lat;
let lonA = rectangle._northEast.lng;


console.log(latA, lonA)
let neMarker = L.marker([latA,lonA]).addTo(map);

// let cont = rectangle.contains(39.93472, 116.4336);
// console.log(cont);

//

// // * Agregar marcadores en el mapa // //
// let marker = L.marker([39.9112879,116.3764966]).addTo(map);
// marker.bindPopup("<b>Heng Er Tiao, Xi Cheng Qu, Bei Jing Shi, China, 100031</b>.").openPopup(); //openPopup method (for markers only) immediately opens the attached popup.

// let res = rectangle.contains(marker.getLatLng());
// console.log(res)


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

// // * Agregar mas de un marcador en el mapa // //

// // * Eliminar marcadores del mapa // //

// // * Medir tiempos de renderizado de los marcadores en el mapa // //

// // * Actualizacion constante del mapa (renderizado de 5 diferentes elementos por pagina) // //