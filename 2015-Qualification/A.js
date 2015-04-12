var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 1
	});

challenge.start(function (data) {
	var sMax = parseInt(data[0].split(' ')[0], 10),
		sAll = data[0].split(' ')[1],
		s = sAll.split('').parseIntAll(10),
		standing = 0,
		invitees = 0;

	for (var i = 0; i <= sMax; i++) {
		if (s[i] > 0) {
			if (standing < i) {
				invitees += (i - standing);
				standing += (i - standing);
			}
			standing += s[i];
		}
	}

	return invitees;
});