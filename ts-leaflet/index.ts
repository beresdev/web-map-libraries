import L from 'leaflet';

const Mymap = L.map('map').setView([19.3744,-99.1345],15);
// let Mymap = L.map('map').setView([39.93472, 116.4336], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Mymap);

const marker = L.marker([19.3794855,-99.1406466]).addTo(Mymap);
marker.bindPopup('El chopo');