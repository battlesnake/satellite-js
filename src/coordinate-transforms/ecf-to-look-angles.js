/*
 * satellite-js v1.2
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

var topocentric = require('./topocentric');
var topocentricToLookAngles = require('./topocentric-to-look-angles');

module.exports = function (observerCoordsEcf, satelliteCoordsEcf) {
	var topocentricCoords = topocentric(observerCoordsEcf, satelliteCoordsEcf);
	return topocentricToLookAngles(topocentricCoords);
};
