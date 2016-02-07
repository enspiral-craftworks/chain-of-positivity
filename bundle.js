(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.linkDistance=500,exports.startLat=-47.28342,exports.startLon=167.50099,exports.brng=40.11;

},{}],2:[function(require,module,exports){
function toRad(t){return t*Math.PI/180}function toDeg(t){return 180*t/Math.PI}function sayHello(){return"hello"}var config=require("./config.js");exports.convertLinksToDistance=function(t){return t*config.linkDistance},exports.getDestinationLatLon=function(t,a,n,o){for(var r=6378137,e=6356752.3142,h=1/298.257223563,i=o,s=toRad(n),M=Math.sin(s),c=Math.cos(s),u=(1-h)*Math.tan(toRad(t)),f=1/Math.sqrt(1+u*u),g=u*f,l=(Math.atan2(u,c),f*M),D=1-l*l,v=D*(r*r-e*e)/(e*e),d=1+v/16384*(4096+v*(-768+v*(320-175*v))),q=v/1024*(256+v*(-128+v*(74-47*v))),I=i/(e*d),L=2*Math.PI;Math.abs(I-L)>1e-12;){var P=Math.cos(2*+I),R=Math.sin(I),k=Math.cos(I),p=q*R*(P+q/4*(k*(-1+2*P*P)-q/6*P*(-3+4*R*R)*(-3+4*P*P)));L=I,I=i/(e*d)+p}var x=g*R-f*k*c,b=Math.atan2(g*k+f*R*c,(1-h)*Math.sqrt(l*l+x*x)),j=Math.atan2(R*M,f*k-g*R*c),y=h/16*D*(4+h*(4-3*D)),H=j-(1-y)*h*l*(I+y*R*(P+y*k*(-1+2*P*P)));Math.atan2(l,-x);return{lat:toDeg(b),lon:a+toDeg(H)}};

},{"./config.js":1}],3:[function(require,module,exports){
var coords=require("./scripts/coords.js");
},{"./scripts/coords.js":2}]},{},[3]);
