var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
var chai = require('chai')
var expect = chai.expect;
var return2 = require('../scripts/scripts.js');
describe('Array', function() {
  describe('return2()', function () {
    it('should return 2 always', function () {
      expect(return2()).to.equal(2);
    });
    it('should be a function', function(){
    	expect(return2).be.function
    });
  });
});

var chai = require('chai')
var expect = chai.expect;
var returnSegmentCoords = require('../scripts/returnSegmentCoords.js');
  describe('returnSegmentCoords()', function () {
    it('should returnSegmentCoords 2 always', function () {
      expect(returnSegmentCoords()).to.equal(3);
    });
    it('should be a function', function(){
    	expect(returnSegmentCoords()).be.function
    });
  });


