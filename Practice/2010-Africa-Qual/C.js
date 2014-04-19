var codejam = require('../codejam'),
	challenge = new codejam.Challenge();

var KEYBOARD = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz',' '];

challenge.start(function(data) {
	var text = data[0],
		output = [];

	for (var i = 0; i < text.length; i++) {
		var char = text[i],
			key;

		for (var j = 0; j < KEYBOARD.length; j++) {
			if (KEYBOARD[j].indexOf(char) !== -1) {
				key = (j === 8 ? 0 : j + 2).toString().repeat(KEYBOARD[j].indexOf(char) + 1);
			}
		}

		if (output.length > 0 && output[output.length - 1][0] === key[0]) {
			output.push(' ');
		}
		output.push(key);
	}

	return output.join('');
}, function(answer, data) {
	var expectedInput = '';
	for (var i = 0; i < answer.length; i++) {
		var key = answer[i],
			idx = 0;

		while (key === answer[++i]) {
			idx++;
		}
		i--;

		if (key === '0') {
			key = 10;
		}
		if (key !== ' ') {
			expectedInput += KEYBOARD[key - 2][idx];
		}
	}

	if (data[0] !== expectedInput) {
		return 'Expected ' + data[0] + ' but answer generated ' + expectedInput;
	}
});