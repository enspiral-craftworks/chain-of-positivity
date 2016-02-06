
var assert = require('assert');
var chai = require('chai')
var expect = chai.expect;
var coords = require('../scripts/coords.js');
var _ = require('../scripts/constants.js');
  
describe('getDestinationLatLon()', function () {
  it('should be a function', function(){
    	expect(coords.getDestinationLatLon()).be.function
    });
    it('should return a correctly calculated LatLon', function(){
     
      var secondLat = coords.getDestinationLatLon(_.startLat,_.startLon,_.brng,_.linkDistance).lat
      var secondLon = coords.getDestinationLatLon(_.startLat,_.startLon,_.brng,_.linkDistance).lon
    	expect(secondLat).to.equal(-47.27998029964266);
      expect(secondLon).to.equal(167.50524770567463);

      var thirdLat = coords.getDestinationLatLon(secondLat,secondLon,_.brng,_.linkDistance).lat
      var thirdLon = coords.getDestinationLatLon(secondLat,secondLon,_.brng,_.linkDistance).lon
      expect(thirdLat).to.equal(-47.27654059722032);
      expect(thirdLon).to.equal(167.5095051354256);

      console.log("lat far away: " + coords.getDestinationLatLon(_.startLat,_.startLon,_.brng,800000).lat)
      console.log("lon far away: " + coords.getDestinationLatLon(_.startLat,_.startLon,_.brng,800000).lon)
    });
  });

describe('convertLinksToDistance()', function () {
  it('should be a function', function(){
      expect(coords.convertLinksToDistance()).be.function
    });
    it('given a number of links, it should return the distance in metres ', function(){
      console.log('In coordsTest.js, result of convertLinksToDistance ' + coords.convertLinksToDistance(5))
      expect(coords.convertLinksToDistance(5)).to.equal(_.linkDistance * 5)
    });
  });



