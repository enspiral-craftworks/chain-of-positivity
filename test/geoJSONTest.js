var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
var geoJSON = require('../scripts/geoJSON.js')
var testData = require('./testData.js')
var config = require('../scripts/config.js')

describe('createGeoJSON()', function () {
  it('should return geoJSON, given JSON in the format {title:x, number_of_links:x, image_link:x }', function () {
    // this is the exact JSON, but it won't pass, not sure how to compare JSON!
    var geoJSONofTestData = {'type': 'FeatureCollection','features': [{'type': 'Feature','properties': {'marker-color': '#78f440','marker-size': 'small','marker-symbol': 'heart','title': 'xxx','description': 'yyy'},'geometry': {'type': 'Point','coordinates': [167.92404690648695, -46.93866307676541]}}, {'type': 'Feature','properties': {'marker-color': '#78f440','marker-size': 'small','marker-symbol': 'heart','title': 'xxx','description': 'yyy'},'geometry': {'type': 'Point','coordinates': [168.34441319643508, -46.59389464750951]}}, {'type': 'Feature','properties': {'marker-color': '#78f440','marker-size': 'small','marker-symbol': 'heart','title': 'xxx','description': 'yyy'},'geometry': {'type': 'Point','coordinates': [168.76213793130225, -46.249114578957006]}}]}
    var createdGeoJSON = JSON.stringify(geoJSON.createGeoJSON(testData.testData))
    expect(createdGeoJSON).to.equal(JSON.stringify(geoJSONofTestData))
  })
})
