var map = L.map("mymap").setView([27.2, 83.95], 10);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">Openstreet map</a> contributors',
});

osm.addTo(map);

var Dark = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

var Water = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 1,
    maxZoom: 16,
    ext: "jpg",
  }
);
var baseMaps = {
  OSM: osm,
  Dark: Dark,
  Water: Water,
};

var marker1 = L.marker([27.2, 83.95]),
  marker2 = L.marker([27.3, 83.99]),
  marker3 = L.marker([27.2, 83.96]);

var markers = L.layerGroup([marker1, marker2, marker3]);

//geojson

var geojson = L.geoJson(nepalData, {
  onEachFeature: function (feature, layer) {
    var district = feature.properties.District;
    layer.bindPopup("district ${District");
  },
  style: {
    color: "red",
    fillColor: "yellow",
    fillOpacity: 0.2,
  },
}).addTo(map);

var overlayers = {
  markers: markers,
  "geojson Layer": geojson,
};

L.control.layers(baseMaps, overlayers).addTo(map);
