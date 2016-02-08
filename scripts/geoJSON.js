var config = require('./config.js')
var coords = require('./coords.js')

function Feature (title, description, lat, lon) {
  this.title = title
  this.description = description
  this.lat = lat
  this.lon = lon
  this.toGeoJSON = function () {
    return {
      'type': 'Feature',
      'properties': {
        'marker-color': '#78f440',
        'marker-size': 'small',
        'marker-symbol': 'heart',
        'title': this.title,
        'description': this.description
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          this.lon,
          this.lat
        ]
      }
    }
  }
}

exports.createGeoJSON = function (data) {
  var geoJSON = {
    'type': 'FeatureCollection',
    'features': [{
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "large",
        "marker-symbol": "star-stroked",
        "title": "The starting point of the chain!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          172.6171875,
          -43.54854811091287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "large",
        "marker-symbol": "embassy",
        "title": "End goal of the chain!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.79248046875,
          -41.29431726315257
        ]
      }
    }] // add in some features already here
  }
  var startPoint = { lat: config.startLat, lon: config.startLon }

  for (var i = 0; i < data.length; i++) {
    var distance = coords.convertLinksToDistance(data[i].number_of_links)
    var destination = coords.getDestinationLatLon(startPoint.lat, startPoint.lon, config.brng, distance)
    var newFeature = new Feature(data[i].title, data[i].description, destination.lat, destination.lon)
    var newFeaturegeoJSON = newFeature.toGeoJSON()
    geoJSON.features.push(newFeaturegeoJSON)
    // console.log('data ' + i + ': '+ ' title ' + data[i].title + ' desc: ' + data[i].description + ' lat: ' + destination.lat + ' lon: ' + destination.lon)
    startPoint = destination
  }

  // console.log('-------> GEOJSON ' + JSON.stringify(geoJSON))
  return geoJSON
}
