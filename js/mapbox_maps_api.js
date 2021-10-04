

mapboxgl.accessToken = mapboxApiKey2;
console.log(mapboxApiKey2);

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-115.1492, 36.1663],
    zoom: 10

})

var emirils = new mapboxgl.Marker()
    .setLngLat([-115.169750, 36.102300])
    .addTo(map);

let latAndLong = geocode("Las Vegas, Nevada", mapboxApiKey2).then(function(results) {
    console.log(results);
})