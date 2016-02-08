(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.linkDistance=500,exports.startLat=-47.28342,exports.startLon=167.50099,exports.brng=40.11;

},{}],2:[function(require,module,exports){
function toRad(t){return t*Math.PI/180}function toDeg(t){return 180*t/Math.PI}var config=require("./config.js");exports.convertLinksToDistance=function(t){return t*config.linkDistance},exports.getDestinationLatLon=function(t,a,n,o){for(var r=6378137,e=6356752.3142,i=1/298.257223563,h=o,s=toRad(n),M=Math.sin(s),c=Math.cos(s),u=(1-i)*Math.tan(toRad(t)),f=1/Math.sqrt(1+u*u),g=u*f,D=Math.atan2(u,c),v=f*M,d=1-v*v,l=d*(r*r-e*e)/(e*e),q=1+l/16384*(4096+l*(-768+l*(320-175*l))),I=l/1024*(256+l*(-128+l*(74-47*l))),L=h/(e*q),P=2*Math.PI;Math.abs(L-P)>1e-12;){var R=Math.cos(2*D+L),k=Math.sin(L),p=Math.cos(L),x=I*k*(R+I/4*(p*(-1+2*R*R)-I/6*R*(-3+4*k*k)*(-3+4*R*R)));P=L,L=h/(e*q)+x}var b=g*k-f*p*c,j=Math.atan2(g*p+f*k*c,(1-i)*Math.sqrt(v*v+b*b)),T=Math.atan2(k*M,f*p-g*k*c),m=i/16*d*(4+i*(4-3*d)),w=T-(1-m)*i*v*(L+m*k*(R+m*p*(-1+2*R*R)));return{lat:toDeg(j),lon:a+toDeg(w)}};

},{"./config.js":1}],3:[function(require,module,exports){
function Feature(t,e,o,r){this.title=t,this.description=e,this.lat=o,this.lon=r,this.toGeoJSON=function(){return{type:"Feature",properties:{"marker-color":"#78f440","marker-size":"small","marker-symbol":"heart",title:this.title,description:this.description},geometry:{type:"Point",coordinates:[this.lon,this.lat]}}}}var config=require("./config.js"),coords=require("./coords.js");exports.createGeoJSON=function(t){for(var e={type:"FeatureCollection",features:[]},o={lat:config.startLat,lon:config.startLon},r=0;r<t.length;r++){var i=coords.convertLinksToDistance(t[r].number_of_links),n=coords.getDestinationLatLon(o.lat,o.lon,config.brng,i),s=new Feature(t[r].title,t[r].description,n.lat,n.lon),a=s.toGeoJSON();e.features.push(a),o=n}return e};

},{"./config.js":1,"./coords.js":2}],4:[function(require,module,exports){
function renderMap(){console.log("renderMap called"),L.mapbox.accessToken="pk.eyJ1IjoiY2lpeWFuIiwiYSI6Iks0djZqb0kifQ.KDk4q7pEJOORGrH-54g0jQ";var e=geoJSON.createGeoJSON(testData.testData);console.log(JSON.stringify(e));var a=L.mapbox.map("chain-of-positivity-map","ciiyan.p2l0jh16").setView([-41.03,168.157],5),o=[];L.mapbox.featureLayer(e).addTo(a).eachLayer(function(e){o.push(e.getLatLng())});var t={color:"#f9e52b"};L.polyline(o,t).addTo(a)}var geoJSON=require("./geoJSON.js"),testData=require("../test/testData.js");module.exports=renderMap;

},{"../test/testData.js":5,"./geoJSON.js":3}],5:[function(require,module,exports){
module.exports.testData=[];

},{}],6:[function(require,module,exports){
var renderMap=require("./scripts/renderMap.js");renderMap();
},{"./scripts/renderMap.js":4}]},{},[6]);
