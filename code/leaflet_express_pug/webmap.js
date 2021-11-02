// main leaflet JS file -> user browersify to generate a package that can be use
// as frontend code!!!

// Import the leaflet package
var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([38.829772, -77.305550], 16);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 40,
	ext: 'png'
	}).addTo(map);

// Adds a popup marker to the webmap for GGL address
L.circleMarker([38.829772, -77.305550]).addTo(map)
	.bindPopup(
		'<b>Geography and Geoinformation Science Dept.</b><br>' +
		'Exploratory Hall<br>' + 
		'George Mason University<br>' +
		'Fairfax, VA'
	)
	.openPopup();