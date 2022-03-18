"use strict";

$(document).ready(function () {
// alert("doc ready")

    // Starting Points

    let startLat = 32.7767;
    let startLong = -96.7970;

    getWeatherData(startLat, startLong)

    function getWeatherData(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${startLat}&lon=${startLong}&units=imperial&appid=${OWN_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                $(`#weather`).html(buildCardContent(data.daily));

            })
    }

    function extractWeatherData(dayObj) {
        return {
            date: dayObj.dt,
            dailyTemp: dayObj.temp.day,
            description: dayObj.weather[0].description,
            humidity: dayObj.humidity,
            wind_speed: dayObj.wind_speed,
            pressure: dayObj.pressure
        }
    }

    function buildCardContent(dayArr) {
        let html = '<div class="row">'
        for (let i = 0; i < 5; i++) {
            html += buildWeatherCard(dayArr[i]);
        }
        html += '</div>';
        return html;
    }


    function buildWeatherCard(day) {
        let html = ""
        let weather = extractWeatherData(day);
        let formattedDate = formatDate(weather.date);
        //language=HTML
        html += `
            <div class="card-header">
                ${formattedDate}
            </div>
            <div id="five-day-forecast" class="card">
                <p>Today's Temperature: ${weather.dailyTemp}</p>
                <p>Description: ${weather.description}</p>
                <p>Humidity: ${weather.humidity}</p>
                <p>Wind speed is : ${weather.wind_speed}</p>
                <p>Pressure: ${weather.pressure}</p>

            </div>`
        return html


    }

    function formatDate(unixDate) {
        return new Date(unixDate * 1000).toISOString().split("T")[0];
    }

    $('#submit').click(function (e) {
        e.preventDefault();
        let userLat = $('#lat').val();
        let userLon = $('#lon').val();
        getWeatherData(userLat, userLon);
    })



    mapboxgl.accessToken = MAP_BOX;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [startLong, startLat]
    });


})