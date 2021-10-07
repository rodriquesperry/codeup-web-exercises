
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherKey,
    id:    4726206,
    units: "imperial"
}).done(function(data) {
    console.log(data);
});