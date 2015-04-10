var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 3
	});

challenge.start(function (data) {
	return 'answer';
});