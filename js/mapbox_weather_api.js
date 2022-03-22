"use strict";


let map;
let marker;
let geocoder;
let popup;
let city;


initialize()
setGeocoderEventListener()

function initialize() {


    mapboxgl.accessToken = MAP_BOX;
    map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/dark-v10",
        zoom: 10,
        center: [-96.7970, 32.7767]
    });
    getWeatherData(map.getCenter().lat, map.getCenter().lng)


    geocoder = new MapboxGeocoder({
        accessToken: MAP_BOX,
        mapboxgl: mapboxgl,
        marker: false
    })

    map.addControl(geocoder)

}


marker = new mapboxgl.Marker({
    color: "green",
    draggable: true
}).setLngLat([map.getCenter().lng, map.getCenter().lat])
    .addTo(map)


function onDragEnd() {
    const lngLat = marker.getLngLat();
    getWeatherData(lngLat.lat, lngLat.lng)
}

marker.on('dragend', onDragEnd);


// function getPopup(description, coordinates) {
//     return new mapboxgl.Popup()
//         // .setLngLat(coordinates)
//         .setLngLat([map.getCenter().lng, map.getCenter().lat])
//         .setHTML(`<p>${description}</p>`)
//         .addTo(map);
// }


function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        let searchCoordLng = e.result.geometry.coordinates[0];
        let searchCoordLat = e.result.geometry.coordinates[1];
        console.log(e)
        getWeatherData(searchCoordLat, searchCoordLng);

        marker.setLngLat([searchCoordLng, searchCoordLat]);

    });


}


//Map Menu
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}



