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
    'features': []
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
