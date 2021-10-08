
weatherData = {
    APPID: openWeatherKey,
    lat:    29.425171,
    lon:    -98.494614,
    units: "imperial"
}
function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/forecast", weatherData).done(function(data) {
        city = '<h3>' + data.city.name + '</h3>';
        console.log(data.city)

        $('.currCity').append(city);
        for (let i = 0; i < data.list.length; i += 8) {

            let icon = ""
            let description = ""
            let wind = data.list[i].wind.speed;

            data.list[i].weather.forEach(item => {
                icon = item.icon;
                description = item.description
                return icon;
            })

            let date = new Date(data.list[i].dt * 1000).toLocaleDateString("en-US");

            html = '<div class="card border">'
                + '<h6 class="card-header text-center">' + date + '</h6>'
                + '<div class="card-body">'
                + '<p class="card-title mb-2 text-center">' + data.list[i].main.temp + "&#8457;" + " / " + data.list[i].main.temp_max + "&#8457;" + '</p>'
                + '<img id="icon" src="http://openweathermap.org/img/wn/' + icon + '@2x.png">'
                + '<hr>'
                + '<p> Description: <strong>' + description + '</strong></p>'
                + '<p> Humidity: <strong>' + data.list[i].main.humidity + '</strong></p>'
                + '<hr>'
                + '<p> Wind: <strong>' + wind + '</strong></p>'
                + '<hr>'
                + '<p> Pressure: <strong>' + data.list[i].main.pressure + '</strong></p>'
                + '</div>'
                + '</div>';

                $('.container-weather').append(html);



        }

    });
    return weatherData;
}

getWeather();


mapboxgl.accessToken = mapboxApiKey2;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 5
})

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.494614, 29.425171])
    .addTo(map);

const onDragEnd = () => {
    lngLat = marker.getLngLat();
    weatherData.lat = lngLat.lat;
    weatherData.lon = lngLat.lng;
    map.flyTo({center: [lngLat.lng, lngLat.lat], essential: true});
    console.log(weatherData);
    $('.currCity').empty();
    $('.container-weather').empty();
    getWeather();
    $('.container-weather').scrollTop();
}
marker.on('dragend', onDragEnd)

// reverseGeocode()(weatherData, openWeatherKey).then(function (result) {
//
// })

