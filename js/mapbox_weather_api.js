"use strict";




mapboxgl.accessToken = MAP_BOX;
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [startLong, startLat]
});

marker = new mapboxgl.Marker({
    color: "green",
    draggable: true
}).setLngLat([startLong, startLat])
    .addTo(map)
console.log(marker)

function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(marker)
}
marker.on('dragend', onDragEnd);
