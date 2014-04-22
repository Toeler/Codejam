var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 3
	});

challenge.start(function (data) {
	data[1] = data[1].split(' ').map(function(el) {
		return parseInt(el);
	}).sort(function(a,b){
		return a - b;
	});
	data[2] = data[2].split(' ').map(function(el) {
		return parseInt(el);
	}).sort(function(a,b){
		return a - b;
	}).reverse();

	var sum = 0;
	for (var i = 0; i < data[0]; i++) {
		sum += data[1][i] * data[2][i];
	}

	return sum;
});