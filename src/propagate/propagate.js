/*
 * satellite-js v1.2
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

var constants = require('../constants');
var jday = require('../gstime/jday');
var sgp4 = require('../sgp4');

module.exports = function propagate(satrec, year, month, day, hour, minute, second){
	//Return a position and velocity vector for a given date and time.
	var j = jday(year, month, day, hour, minute, second);
	var m = (j - satrec.jdsatepoch) * constants.minutesPerDay;
	return sgp4(satrec, m);
};
