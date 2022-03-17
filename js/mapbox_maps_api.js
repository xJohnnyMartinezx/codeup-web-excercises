"use strict";

$(document).ready(function () {
// alert("doc ready")

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=32.779167&lon=-96.808891&units=imperial&appid=" + OWN_KEY)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    let startLat = 32.7767;
    let startLong = -96.7970;


    let map = initMap(startLong, startLat)
    let marker = createMarker(startLong, startLat)
    let popup = createPopup(startLong, startLat)

    marker.setPopup(popup)

    function initMap(lon, lat) {
        mapboxgl.accessToken = MAP_BOX;
        return new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lon, lat], // starting position [lng, lat]
            zoom: 9 // starting zoom
        })
    }

    $("#map-container").addClass("container-fluid row justify-content-center align-item")


    function createMarker(lon, lat) {
        return new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map);
    }


//    function to create popup

    function createPopup(lon, lat){
        return new mapboxgl.Popup()
            .setLngLat([lon, lat])
            .setHTML
    }

//language=HTML
    $('body').append(`




    `)


})