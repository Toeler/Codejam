var challenge = new (require('./codejam')).Challenge();

challenge.start(function(data) {
	var words = data.toString().split(' ');

	return words.reverse().join(' ');
});