var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 2
	}),
	map = {
		"1": {
			"1": "1",
			"i": "i",
			"j": "j",
			"k": "k"
		},
		"i": {
			"1": "i",
			"i": "-1",
			"j": "k",
			"k": "-j"
		},
		"j": {
			"1": "j",
			"i": "-k",
			"j": "-1",
			"k": "i"
		},
		"k": {
			"1": "k",
			"i": "j",
			"j": "-i",
			"k": "-1"
		}
	};

function getProduct(a, b) {
	var aNeg = false, bNeg = false;
	if (a.indexOf("-") > -1) {
		aNeg = true;
		a = a.slice(1);
	}
	if (b.indexOf("-") > -1) {
		bNeg = true;
		b = b.slice(1);
	}

	var result = map[a][b];

	if (aNeg || bNeg) {
		if (result.indexOf('-') > -1) {
			// Negative * Negative
			result = result.slice(1);
		} else {
			// Positive * Negative
			result = String.format('-{0}', result);
		}
	}

	return result;
}

function solveK(str) {
	if (str.indexOf('i') === -1 && str.indexOf('j') === -1 && str.indexOf('k') === -1) {
		return false;
	}

	var curr = str[0],
		used = curr;
	str = str.slice(1);

	while (str.length > 0) {
		curr = getProduct(curr, str[0]);
		used = used + str[0];
		str = str.slice(1);
	}

	if (curr === "k") {
		return used;
	}

	return false;
}

function solveJ(str) {
	if (str.indexOf('i') === -1 && str.indexOf('k') === -1) {
		return false;
	}

	var curr = str[0],
		used = curr;
	str = str.slice(1);

	while (str.length >= 1) {
		if (curr === "j") {
			var kResult = solveK(str);
			if (kResult) {
				return [used, kResult];
			}
		}

		curr = getProduct(curr, str[0]);
		used = used + str[0];
		str = str.slice(1);
	}

	return false;
}

function solveI(str) {
	if (str.indexOf('j') === -1 && str.indexOf('k') === -1) {
		return false;
	}

	var curr = str[0],
		used = curr;
	str = str.slice(1);

	while (str.length >= 2) {
		if (curr === "i") {
			var jResult = solveJ(str);
			if (jResult) {
				return [used].concat(jResult);
			}
		}

		curr = getProduct(curr, str[0]);
		used = used + str[0];
		str = str.slice(1);
	}

	return false;
}

challenge.start(function (data) {
	var X = parseInt(data[0].split(' ')[1], 10),
		inputStr = data[1].repeat(X),
		result = solveI(inputStr);
console.log(inputStr, result);
	return result ? "YES": "NO";
});