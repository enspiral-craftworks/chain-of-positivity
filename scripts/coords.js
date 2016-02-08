var config = require('./config.js')

// -----------------------------+ private functions +--------------------------------

function toRad (n) {
  return n * Math.PI / 180
}

function toDeg (n) {
  return n * 180 / Math.PI
}

// -----------------------------+ exports +--------------------------------

exports.convertLinksToDistance = function (numberOfLinks) {
  return numberOfLinks * config.linkDistance
}

// calculate the destination point given start point latitude / longitude (numeric degrees), bearing (numeric degrees) and distance (in m).
// https://gist.github.com/mathiasbynens/354587
// Wow, this function is horrendous. TODO: Refactor this mess!
exports.getDestinationLatLon = function (lat1, lon1, brng, dist) {
  var a = 6378137
  var b = 6356752.3142
  var f = 1 / 298.257223563 // WGS-84 ellipsiod
  var s = dist // needs to be in meters
  var alpha1 = toRad(brng)
  var sinAlpha1 = Math.sin(alpha1)
  var cosAlpha1 = Math.cos(alpha1)
  var tanU1 = (1 - f) * Math.tan(toRad(lat1))
  var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1))
  var sinU1 = tanU1 * cosU1
  var sigma1 = Math.atan2(tanU1, cosAlpha1)
  var sinAlpha = cosU1 * sinAlpha1
  var cosSqAlpha = 1 - sinAlpha * sinAlpha
  var uSq = cosSqAlpha * (a * a - b * b) / (b * b)
  var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)))
  var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)))
  var sigma = s / (b * A)
  var sigmaP = 2 * Math.PI

  while (Math.abs(sigma - sigmaP) > 1e-12) {
    var cos2SigmaM = Math.cos(2 * sigma1 + sigma)
    var sinSigma = Math.sin(sigma)
    var cosSigma = Math.cos(sigma)
    var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)))
    sigmaP = sigma
    sigma = s / (b * A) + deltaSigma
  }

  var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1
  var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp))
  var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1)
  var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha))
  var L = lambda - (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)))

  return {
    lat: toDeg(lat2),
    lon: lon1 + toDeg(L)
  }
}
