function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}



function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.openweathermap.org';
    var endPoint = '/geo/1.0/reverse?';
    return fetch(baseUrl + endPoint + "lat=" + coordinates.lat + "&lon=" + coordinates.lng + "&appid=" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.city.name;
        });
}