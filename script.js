var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Madhya Pradesh FRA claim
L.marker([23.2599, 77.4126])
.addTo(map)
.bindPopup("FRA Claim - Madhya Pradesh");

// Odisha FRA claim
L.marker([20.2961, 85.8245])
.addTo(map)
.bindPopup("FRA Claim - Odisha");

// Telangana FRA claim
L.marker([17.3850, 78.4867])
.addTo(map)
.bindPopup("FRA Claim - Telangana");