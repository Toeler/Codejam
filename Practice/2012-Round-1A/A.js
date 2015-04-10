var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 2
	});

challenge.start(function (data) {
	var len = parseInt(data[0].split(' ')[1], 10),
		probabilities = data[1].split(' ').map(function(el) { return parseFloat(el); }),
		lowest;

	// continue
	var allRight = probabilities.reduce(function(a, b) {
		return a * b;
	});
	lowest = (allRight * (len - probabilities.length + 1)) + ((1 - allRight) * (len - probabilities.length + 1 + len + 1));

	// enter
	var num = (1 + len + 1);
	if (num < lowest) {
		lowest = num;
	}

	// backspaces
	var backspaces = [];
	for (var i = 1; i <= probabilities.length; i++) {
		var prob = 1;

		for (var j = 0; j < probabilities.length; j++) {
			if (j < probabilities.length - i) {
				// Correct
				prob *= probabilities[j];
			} else {
				// Incorrect
				prob *= (1 - probabilities[j]);
			}
		}

		console.log(prob);
	}

	console.log('answer:', lowest);
});