var codejam = require('../codejam'),
	challenge = new codejam.Challenge();

var cache = [];

function isPalindrome(number) {for (var j = 0; j < number.length; j++) {
		if (number[j] !== number[number.length - 1 - j]) {
			return false;
		}
	}
	return true;
}

/* This only solves the small in the given time */
challenge.start(function(data) {
	var endpoints = data[0].split(' ');
	endpoints[2] = Math.ceil(Math.sqrt(endpoints[0]));
	endpoints[3] = Math.floor(Math.sqrt(endpoints[1]));

	var count = 0;
	for (var i = endpoints[2]; i <= endpoints[3]; i++) {
		if (!cache[i]) {
			cache[i] = isPalindrome(i.toString()) && isPalindrome((i * i).toString());
		}

		if (cache[i]) {
			count++;
		}
	}

	return count;
});