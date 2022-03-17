"use strict";

$(document).ready(function (){
// alert("doc ready")

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=32.7767&lon=-96.7970&exclude={part}&appid=" + OWN_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })



})