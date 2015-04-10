var codejam = require('../../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 1,
		caseCheckerFn: function(ans) {
			if (isNaN(ans)) {
				return String.format("{0} is NaN", ans);
			}
		}
	});

challenge.start(function (data) {
	var v = data[0].split(' ')[0],
		d = data[0].split(' ')[1],
		g = 9.8,
		radians,
		angle;

	radians = 0.5 * Math.asin((g * d) / v / v); // For some reason you must / v / v instead of / v^2
	angle = radians  * (180 / Math.PI);

	return angle
});