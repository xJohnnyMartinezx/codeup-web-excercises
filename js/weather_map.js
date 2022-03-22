"use strict";


function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWN_KEY}`)
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

    let format = {
        day: "numeric",
        month: "2-digit",
        year: "numeric"
    };

    // console.log(weather.date.toLocaleString("en-US", format))
    //language=HTML
    html += `
      
        <section class="col-12 col-sm-6 col-lg-4 col-xl-4 col-xxl-2 mx-auto mt-2">
            <div class="card-header mx-auto">
                ${formattedDate}
            </div>
            <div id="five-day-forecast" class="card border-5 mx-0">
                <p>Average Daytime Temperature: <b>${weather.dailyTemp} °F</b> </p>
                <p>Description: <b>${weather.description}</b></p>
                <p>Humidity: <b>${weather.humidity}%</b></p>
                <p>Wind speed is : <b>${weather.wind_speed} MPH</b></p>
                <p>Pressure: <b>${weather.pressure} hPa</b></p>

            </div>
        </section>`
    return html


}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split("T")[0];
}


