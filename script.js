var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

/* ---------- FRA Status Icons ---------- */

var approvedIcon = new L.Icon({
iconUrl:'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
iconSize:[32,32]
});

var pendingIcon = new L.Icon({
iconUrl:'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
iconSize:[32,32]
});

var rejectedIcon = new L.Icon({
iconUrl:'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
iconSize:[32,32]
});

/* ---------- FRA Claim Markers ---------- */

// Madhya Pradesh
L.marker([23.2599, 77.4126], {icon: approvedIcon})
.addTo(map)
.bindPopup("Approved FRA Claim - Madhya Pradesh");

// Odisha
L.marker([20.2961, 85.8245], {icon: pendingIcon})
.addTo(map)
.bindPopup("Pending FRA Claim - Odisha");

// Telangana
L.marker([17.3850, 78.4867], {icon: rejectedIcon})
.addTo(map)
.bindPopup("Rejected FRA Claim - Telangana");

/* ---------- Load State Layer ---------- */

fetch("https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson")
.then(function(response){
return response.json();
})
.then(function(data){

L.geoJSON(data, {
style: {
color: "darkgreen",
weight: 2,
fillColor: "lightgreen",
fillOpacity: 0.3
},

onEachFeature: function (feature, layer) {
layer.bindPopup("State: " + feature.properties.NAME_1);
}

}).addTo(map);

});
