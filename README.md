# web-map-libraries
This repository is a collection of web map projects created using different map libraries. The purpose is to compare and contrast the features, ease of use, and overall experience of using different web map libraries.

* [Leaflet](#leaflet-🗺)

_____



### Leaflet [🗺](https://leafletjs.com/)

### Validaciones

* [Uso libre](#uso-libre) ✅
* [Instalación](#instalación) ✅
* [Compatibilidad con Vue3](#compatibilidad-con-vue3) ✅*
* [Soporte para TypeScript](#soporte-para-typescript) ✅
* [Soporte/actualizaciones](#soporteactualizaciones) ✅

### Funciones de prueba:

* Obtener coordenadas de un punto en especifico. ✅
* Obtener las coordenadas de un área especifica. ✅
* Agregar marcadores en el mapa. ✅
* Configurar iconos como marcadores en el mapa. ✅ 
* Al hacer click e un marcador en el mapa se haga ZoomIn alrededor del mismo
* Agregar mas de un marcador en el mapa ✅
* Eliminar marcadores del mapa
* Medir tiempos de renderizado de los marcadores en el mapa. ✅
* Actualizacion constante del mapa (renderizado de 5 diferentes elementos por pagina)
___
___
___

#### Uso libre
Leaflet es una libreria JavaScript open-source

#### Instalación
Existen distintas formas de instalar la librería para usarla en los proyectos:

[Leaflet Download](https://leafletjs.com/download.html)

*  npm: 

[leaflet](https://www.npmjs.com/package/leaflet)

`npm i leaflet`

🚩 la renderizción del mapa tuvo fallas con esta opción.

* Using a Hosted Version of Leaflet:

``
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />

<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
``

✅ validada

#### Compatibilidad con Vue3

Vue-leaflet, written and compatible with Vue 3!
* [Beta Version](https://github.com/vue-leaflet/vue-leaflet)

#### Soporte para TypeScript

Los tipos para leaflet se pueden instalar mediante npm:

[@types/leaflet](https://www.npmjs.com/package/@types/leaflet)

``npm install --save @types/leaflet``

#### Soporte/actualizaciones

##### Browser Support
* Desktop
* Chrome
* Firefox
* Safari 5+
* Opera 12+
* IE 9–11
* Edge
 
##### Mobile
* Safari for iOS 7+
* Chrome for mobile
* Firefox for mobile
* IE10+ for Win8 devices

### Info extra
#### Integraciones Backend

* [Django Leaflet](https://django-leaflet.readthedocs.io/en/latest/)

* [Flask-leaflet-example](https://github.com/PnEcrins/Flask-leaflet-example/blob/master/app/templates/map.html)

* [How to Make a Web Map with Python’s Flask and Leaflet](https://medium.com/geekculture/how-to-make-a-web-map-with-pythons-flask-and-leaflet-9318c73c67c3)

* [Querying Postgres with Python Fastapi Backend and Leaflet & Geoman Fronted - Applying Geometry Filters](https://geo.rocks/post/leaflet-geoman-fastapi-postgis/)