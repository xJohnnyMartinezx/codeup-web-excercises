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


    // console.log(weather.date.toLocaleString("en-US", format))
    //language=HTML
    html += `
      
        <section class="col-12 col-sm-6 col-lg-4 col-xl-4 col-xxl-2 mx-auto mt-2">
            <div class="card-header mb-3 mx-auto" style="border-radius: 50px; text-align: center;">
                ${formattedDate}
            </div>
            
            <div id="five-day-forecast" class="card border-5 px-0">
                <p>Average Daytime Temperature:</p>
                <p><b style="color: #0fb784">${weather.dailyTemp} °F</b></p>
                <p>Description:</p>
                <p><b style="color: #0fb784">${weather.description}</b></p>
                <div class="hidden-info">
                <p>Humidity:</p>
                <p><b style="color: #0fb784">${weather.humidity}%</b></p>
                <p>Wind speed is :</p>
                <p><b style="color: #0fb784">${weather.wind_speed} MPH</b></p>
                <p>Pressure:</p>
                <p><b style="color: #0fb784">${weather.pressure} hPa</b></p>
                </div>
            
            </div>
        </section>`
    return html


}

function formatDate(unixDate) {
    // return new Date(unixDate * 1000).toISOString().split("T")[0];
    return new Date(unixDate * 1000).toLocaleDateString().split("T")[0];
}


