var codejam = require('./codejam'),
	challenge = new codejam.Challenge({linesPerCase: 3});

challenge.start(function(data) {
	var credit = parseInt(data[0]),
		items = data[2].split(' ').map(function (el) {
			return parseInt(el);
		});

	for (var i = 0; i < items.length - 1; i++) {
		for (var j = i + 1; j < items.length; j++) {
			if (items[i] + items[j] === credit) {
				return Math.min(i + 1, j + 1) + ' ' + Math.max(i + 1, j + 1);
			}
		}
	}

	return 'Impossible';
});