
let favSpots = [
    {
        name: "EMERIL’S NEW ORLEANS FISH HOUSE",
        lat: 36.102300,
        lng: -115.169750
    },
    {
        name: "Chili's Bar and Grill",
        lat: 29.540340,
        lng: -98.404660

    },
    {
        name: "Home Cooked Meals",
        lat: 29.601910,
        lng: -98.265590
    }
];

favSpots.for

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

var emirilsPopup = new mapboxgl.Popup()
    .setLngLat([-115.169750, 36.102300])
    .setHTML("<h5><em>EMERIL’S NEW ORLEANS FISH HOUSE</em></h5>");

emirils.setPopup(emirilsPopup);

let latAndLong = geocode("Las Vegas, Nevada", mapboxApiKey2).then(function(results) {
    console.log(results);
})