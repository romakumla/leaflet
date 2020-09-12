var map = L.map("map").setView([27.2, 83.95], 10);

var osm = L.tileLayer("https://{S}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    "&copy; <a href='https://openstreetmap.org/copyright'> Openstreet map</a> contributors",
});

osm.addTo(map);

var marker = L.marker([27.2, 83.95]).addTo(map);
