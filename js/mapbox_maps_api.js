
let favSpots = [
    {
        name: "Chama Gaucha Brazilian Steakhouse",
        coordinates : {
            lng: -98.497730,
            lat: 29.610290
        }

    },
    {
        name: "Chili's Bar and Grill",
        coordinates: {
            lng: -98.404660,
            lat: 29.540340
        }



    },
    {
        name: "Home Cooked Meals",
        coordinates: {
            lng: -98.265590,
            lat: 29.601910
        }


    }
];



mapboxgl.accessToken = mapboxApiKey2;
console.log(mapboxApiKey2);

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 5

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

favSpots.forEach(function(marker) {
    console.log(marker.coordinates)

    let markers = new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .addTo(map);


    var favPopup = new mapboxgl.Popup()
        .setLngLat(marker.coordinates)
        .setHTML("<h5><em>" + marker.name + "</em></h5>");

        markers.setPopup(favPopup)
})