"use strict";


let map;
let marker;
let geocoder;

initialize()
setGeocoderEventListener()

function initialize() {


    mapboxgl.accessToken = MAP_BOX;
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-96.7970, 32.7767]
    });
    getWeatherData(map.getCenter().lat, map.getCenter().lng)
// console.log(map.getCenter().lat)

    geocoder = new MapboxGeocoder({
        accessToken: MAP_BOX,
        mapboxgl: mapboxgl,
        // maker: false
    });

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






    function setGeocoderEventListener() {
        geocoder.on("result", function (e) {
            let searchCoordLng = e.result.geometry.coordinates[0];
            let searchCoordLat = e.result.geometry.coordinates[1];
            getWeatherData(searchCoordLat, searchCoordLng);


        });

    }



