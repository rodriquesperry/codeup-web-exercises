
weatherData = {
    APPID: openWeatherKey,
    lat:    29.425171,
    lon:    -98.494614,
    units: "imperial"
}

function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/forecast", weatherData).done(function(data) {
        city ='<h5><strong> City:</strong><em>' + " " + data.city.name + '</em></h5>';

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
                + '<h5 class="card-header text-center text-white"><strong>' + date + '</strong></h5>'
                + '<div class="card-body">'
                + '<h5 class="mb-2 text-center"><strong>' + data.list[i].main.temp_max + "&#8457;" + " / " + data.list[i].main.feels_like + "&#8457;" + '</strong></h5>'
                + '<div class="mt-3" id="iconBkGrnd">'
                + '<img class="mr-5" id="icon" src="http://openweathermap.org/img/wn/' + icon + '@2x.png">'
                + '</div>'
                + '<hr>'
                + '<p> Description: <strong>' + description + '</strong></p>'
                + '<p> Humidity: <strong>' + data.list[i].main.humidity + '</strong>%</p>'
                + '<hr>'
                + '<p> Wind: <strong>' + wind + '</strong> mph</p>'
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
    zoom: 12
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
    map.flyTo({center: [weatherData.lon, weatherData.lat], essential: true});
    $('.currCity').empty();
    $('.container-weather').empty();
    getWeather();
    // $('.container-weather').scrollTop();
}

$('.btn').on('click', function(e) {
    e.preventDefault();
})

marker.on('dragend', onDragEnd)

let searchVal = ""
let search = $('#search');

search.change(function() {
    searchVal = search.val();
    geocode(searchVal, mapboxApiKey2).then(function (result) {
        weatherData.lat = result[1];
        weatherData.lon = result[0];
        map.flyTo({center: result, essential: true});
        $('.currCity').empty();
        $('.container-weather').empty();
        getWeather();
        marker.setLngLat(result);
    })
})

