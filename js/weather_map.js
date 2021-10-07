
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    lat:    29.425171,
    lon:    -98.494614,
    units: "imperial"
}).done(function(data) {

    for (let i = 0; i < data.list.length; i += 8) {
        let icon = ""
        let description = ""
        let wind = data.list[i].wind.speed;


        console.log(data.list[i]);
        data.list[i].weather.forEach(item => {
            console.log(item.icon);
            icon = item.icon;
            description = item.description
            console.log(item.description);
            return icon;
        })



        let date = new Date(data.list[i].dt * 1000).toLocaleDateString("en-US");

        html = '<div class="card border">'
                + '<h6 class="card-header text-center">' + date + '</h6>'
                + '<div class="card-body">'
                + '<p class="card-title mb-2 text-center">' + data.list[i].main.temp + "&#8457;" + " / " + data.list[i].main.temp_max + "&#8457;" + '</p>'
                + '<img id="icon" src="http://openweathermap.org/img/w/' + icon + '.png">'
                + '<hr>'
                + '<p> Description: <strong>' + description + '</strong></p>'
                + '<p> Humidity: <strong>' + data.list[i].main.humidity + '</strong></p>'
                + '<hr>'
                + '<p> Wind: <strong>' + wind + '</strong></p>'
                + '<hr>'
                + '<p> Pressure: <strong>' + data.list[i].main.pressure + '</strong></p>'
                + '</div>'
                + '</div>';

        $('.container').append(html);
    }



});