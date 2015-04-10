var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 3
	});

function flip(bit) {
	return (1 - parseInt(bit)).toString();
}

function solve(current, needed, dontFlip, idx) {
	idx = idx || 0;

	if (idx >= current[0].length) {
		return null;
	}

	var match = false,
		count = 0,
		lowest;
	current = current.slice(0);

	for (i = 0; i < needed.length; i++) {
		match = false;
		for (var j = 0; j < current.length; j++) {
			match |= current[j] === needed[i];
		}
		if (!match) {
			break;
		}
	}

	if (match) {
		return count;
	}

	lowest = solve(current, needed, dontFlip, idx + 1) || Infinity;
	lowest = lowest == null ? Infinity : lowest;
	if (dontFlip.indexOf(idx) === -1) {
		for (var i = 0; i < current.length; i++) {
			current[i] = current[i].replaceAt(idx, flip(current[i][idx]))
		}
		var ans = solve(current, needed, dontFlip, ++idx);
		ans = ans == null ? Infinity : ans;
		if (ans < lowest) {
			lowest = ans + 1;
		}
	}

	return lowest === Infinity ? null : lowest;
}

challenge.start(function (data) {
	data[0] = data[0].split(' ');
	var num = parseInt(data[0][0], 10),
		len = parseInt(data[0][1], 10),
		current = data[1].split(' '),
		needed = data[2].split(' '),
		forceFlipped = [],
		forceFlip = 0;

	/*for (var j = 0; j < len; j++) {
		var need1s = 0,
			curr1s = 0;

		for (var i = 0; i < num; i++) {
			if (needed[i][j] == 1) {
				need1s++;
			}
			if (current[i][j] == 1) {
				curr1s++;
			}
		}

		if (need1s !== curr1s) {
			if (need1s !== (num - curr1s)) {
				return 'NOT POSSIBLE';
			} else {
				// Flip
				forceFlipped.push(j);
				output++;
				for (i = 0; i < num; i++) {
					current[i] = current[i].replaceAt(j, flip(current[i][j]));
				}
			}
		}
	}*/

	var ans = solve(current, needed, forceFlipped);
	if (ans == null) {
		return 'NOT POSSIBLE';
	}
	return forceFlip + ans;
});