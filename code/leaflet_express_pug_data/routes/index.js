var express = require('express');
var router = express.Router();

// dependencies that will be needed.
const fs = require('fs');

// doing a syncronous reading of the file in order to "load the data" after that async can be used for a better user experience. 
let geoJSON_data = fs.readFileSync('Restaurant_data.geojson');
let Restaurants = JSON.parse(geoJSON_data);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - Leaflet' }); // refers to index.pug
});

router.get('/restaurants', function(req,res, next){
  res.render('index2', {datastr: JSON.stringify(Restaurants)});
//  res.render('index', {jsonData: Restaurants});
})

router.get('/restaurants_cluster', function(req,res, next){
  res.render('index3', {datastr: JSON.stringify(Restaurants)});
//  res.render('index', {jsonData: Restaurants});
})

module.exports = router;
