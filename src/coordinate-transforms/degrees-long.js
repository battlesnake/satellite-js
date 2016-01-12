/*
 * satellite-js v1.2
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

var constants = require('../constants');

module.exports = function (radians) {
	var degrees = (radians/constants.pi*180) % (360);
	if (degrees > 180){
		degrees = 360 - degrees;
	}
	else if (degrees < -180){
		degrees = 360 + degrees;
	}
	return degrees;
};
