mapboxgl.accessToken = mapboxApiKey2;
console.log(mapboxApiKey2);

let favSpots = [
    {
        name: "Chama Gaucha Brazilian Steakhouse",
        address: "18318 Sonterra Place San Antonio, TX 78258;",
        coordinates : {
            lng: -98.497730,
            lat: 29.610290
        },
        img : "img/CG1.png"
    },
    {
        name: "Chili's Bar and Grill",
        address: "17650 IH 35 North, Schertz, TX 78154",
        coordinates: {
            lng: -98.404660,
            lat: 29.540340
        },
        img : "img/chilis.png"

    },
    {
        name: "Home Cooked Meals",
        address: "132 Wistoria Ct, Cibolo, TX 78108",
        coordinates: {
            lng: -98.265590,
            lat: 29.601910
        }


    }
];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 8
})

geocode(favSpots[0].address, mapboxApiKey2).then(function (result) {
    map.setCenter(result);
})

var emirils = new mapboxgl.Marker()
    .setLngLat([-115.169750, 36.102300])
    .addTo(map);

var emirilsPopup = new mapboxgl.Popup()
    .setLngLat([-115.169750, 36.102300])
    .setHTML("<h5><em>EMERIL’S NEW ORLEANS FISH HOUSE</em></h5>" + "<img src='img/emiril1.png'>");

emirils.setPopup(emirilsPopup);

// let latAndLong = geocode("Las Vegas, Nevada", mapboxApiKey2).then(function(results) {
//     console.log(results);
// })

favSpots.forEach(function(marker) {
    console.log(marker.coordinates)

    let markers = new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .addTo(map);


    var favPopup = new mapboxgl.Popup()
        .setLngLat(marker.coordinates)
        .setHTML("<h5><em>" + marker.name + "</em></h5>" + "<img src=" + marker.img + ">" );

        markers.setPopup(favPopup)
})