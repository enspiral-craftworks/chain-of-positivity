/* global L */
var geoJSON = require('./geoJSON.js')
var testData = require('../test/testData.js')
module.exports = renderMap

function renderMap () {
  console.log('renderMap called')

  L.mapbox.accessToken = 'pk.eyJ1IjoiY2lpeWFuIiwiYSI6Iks0djZqb0kifQ.KDk4q7pEJOORGrH-54g0jQ'
  var chainMarkers = geoJSON.createGeoJSON(testData.testData)
  console.log(JSON.stringify(chainMarkers))

  // https://www.mapbox.com/help/building-a-store-locator/

  var positiveMap = L.mapbox.map('chain-of-positivity-map', 'ciiyan.p2l0jh16')
    .setView([-42.703,174.413],7) 

  var line = []
  L.mapbox.featureLayer(chainMarkers)
    .addTo(positiveMap)
    .eachLayer(function (marker) {
      line.push(marker.getLatLng())
    })

  var polyline_options = {
    color: '#f9e52b'
  }
  L.polyline(line, polyline_options).addTo(positiveMap)
}
