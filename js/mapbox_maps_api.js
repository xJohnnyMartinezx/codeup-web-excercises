"use strict";

$(document).ready(function () {
// alert("doc ready")

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=32.779167&lon=-96.808891&units=imperial&appid=" + OWN_KEY)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    let startLat = 34.28641134913667;
    let startLong = -119.29548800556852;


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
            zoom: 13 // starting zoom
        })
    }


    function createMarker(lon, lat) {
        return new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map);
    }


//    function to create popup

    function createPopup(lon, lat) {
        return new mapboxgl.Popup()
            .setLngLat([lon, lat])
            .setHTML("<h5></h5><p></p>")

    }

    var restaurantsArr =
        [{
            name: "Barrelhouse 101",
            info: "This place has 101 beers on tap.",
            lat: "34.27841424184352",
            lon: "-119.29237396726695"
        },
            {
                name: "Spencer Makenzie's",
                info: "The best fish tacos in town",
                lat: "34.27814643394509",
                lon: "-119.28838016116514"
            },
            {
                name: "Topa Topa Brewing Co.",
                info: "Really good IPAs",
                lat: "34.278016381842306",
                lon: "-119.29903523509854"
            }]

    // var restNameArr = [];
    // var restInfoArr = [];
    // var restLatArr = [];
    // var restLonArr = [];


    function restLat() {
        for (let i = 0; i < restaurantsArr.length; i++) {
            return restaurantsArr[i]
            // console.log(restaurantsArr[i].lat)
        }
    }

    console.log(restLat())



    function restLon() {
        for (let i = 0; i < restaurantsArr.length; i++) {
            // console.log(restaurantsArr[i].lat)
            return restaurantsArr[i].lon;

        }
    }


    $("#map-container").addClass("container-fluid row justify-content-center align-item")


//language=HTML
    $('body').append(`




    `)


})
