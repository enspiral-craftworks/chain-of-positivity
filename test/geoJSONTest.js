var assert = require('assert');
var chai = require('chai')
var expect = chai.expect;
var geoJSON = require('../scripts/geoJSON.js');
var testData = require('./testData.js');
var config = require('../scripts/config.js');


describe('createGeoJSON()', function () {
 it('should return geoJSON, given JSON in the format {title:x, number_of_links:x, image_link:x }', function(){

  var geoJSONofTestData = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "xxx",
        "description": "yyy"

      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        config.startLat,
        config.startLon
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "xxx",
        "description": "yyy"

      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        -47.28273207274959,
        167.50184158529035
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "xxx",
        "description": "yyy"

      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        -47.28273207274959,
        167.5026931485021
        ]
      }
    }
    ]
  }
  expect(geoJSON.createGeoJSON(testData.testData)).to.equal(geoJSONofTestData);
});
});