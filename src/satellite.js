var constants = require('./constants');
var degreesLat = require('./coordinate-transforms/degrees-lat');
var degreesLong = require('./coordinate-transforms/degrees-long');
var ecfToEci = require('./coordinate-transforms/ecf-to-eci');
var ecfToLookAngles = require('./coordinate-transforms/ecf-to-look-angles');
var eciToEcf = require('./coordinate-transforms/eci-to-ecf');
var eciToGeodetic = require('./coordinate-transforms/eci-to-geodetic');
var geodeticToEcf = require('./coordinate-transforms/geodetic-to-ecf');
var topocentric = require('./coordinate-transforms/topocentric');
var topocentricToLookAngles = require('./coordinate-transforms/topocentric-to-look-angles');
var dopplerFactor = require('./doppler-factor');
var days2mdhms = require('./gstime/days2mdhms');
var gstime = require('./gstime/gstime');
var jday = require('./gstime/jday');
var propagate = require('./propagate/propagate');
var twoline2satrec = require('./propagate/twoline2satrec');
var sgp4 = require('./sgp4');

module.exports = {
	version: '1.2.0',
	constants: constants,

	// Coordinate transforms
	degreesLat: degreesLat,
	degreesLong: degreesLong,
	eciToEcf: eciToEcf,
	ecfToEci: ecfToEci,
	eciToGeodetic: eciToGeodetic,
	ecfToLookAngles: ecfToLookAngles,
	geodeticToEcf: geodeticToEcf,

	dopplerFactor: dopplerFactor,
	gstimeFromJday: gstime,
	gstimeFromDate: function(year, mon, day, hr, minute, sec) {
		return gstime(jday(year, mon, day, hr, minute, sec));
	},
	propagate: propagate,
	twoline2satrec: twoline2satrec,
	sgp4: sgp4
};
