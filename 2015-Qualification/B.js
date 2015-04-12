var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 2
	});

/*function countInstancesInArray(array, instance) {
	var count = 0;

	for (var i = 0; i < array.length; ++i) {
		if (array[i] === instance) {
			++count;
		}
	}

	return count;
}

function getSecondHighestInArray(array) {
	var highest = 0, secondHighest = 0;
	for (var i = 0; i < array.length; ++i) {
		if (array[i] > highest) {
			secondHighest = highest;
			highest = array[i];
		} else if (array[i] !== highest && secondHighest < array[i]) {
			secondHighest = array[i];
		}
	}
	return secondHighest;
}

challenge.start(function (data) {
	var plates = data[1].split(' ').parseIntAll(10),
		minutes = 0,
		highest = Array.max(plates),
		secondHighest = getSecondHighestInArray(plates),
		minutesToSplitHighest = countInstancesInArray(plates, highest);

	while(minutesToSplitHighest + Math.max(Math.round(highest / 2), secondHighest) < highest) {
		var index = plates.indexOf(highest);
		plates.splice(index, 1);
		plates.push(Math.round(highest / 2));
		plates.push(highest - Math.round(highest / 2));

		highest = Array.max(plates);
		secondHighest = getSecondHighestInArray(plates);
		minutesToSplitHighest = countInstancesInArray(plates, highest);

		++minutes;
	}

	return minutes + highest;
}, function(ans, data) {
	var plates = data[1].split(' ').parseIntAll(10),
		highest = Array.max(plates);

	if (ans > highest) {
		return String.format('{0} provided, could eat all in {1}', ans, highest);
	}
});*/

/*function solve(plates) {
	plates = plates.slice();

	var highest = Array.max(plates),
		eatAllNow = highest;

	if (highest > 3) {
		var index = plates.indexOf(highest);
		plates.splice(index, 1);
		plates.push(Math.round(highest / 2));
		plates.push(highest - Math.round(highest / 2));
		var weDoSpecialMinute = solve(plates);
		// If splitting the largest plate results in less time, do that
		if (weDoSpecialMinute < eatAllNow) {
			return weDoSpecialMinute + 1;
		}
	}
	return eatAllNow
}

challenge.start(function (data) {
	var plates = data[1].split(' ').parseIntAll(10),
		result = solve(plates);

	return result;
}, function(ans, data) {
	var plates = data[1].split(' ').parseIntAll(10),
		highest = Array.max(plates);

	if (ans > highest) {
		return String.format('{0} provided, could eat all in {1}', ans, highest);
	}
});*/

function solve(plates) {
	var minutes = 0,
		found = false,
		min = 0;

	for (var i = 0; i < plates.length; ++i) {
		var num = plates[i];
		if (num > 6) {
			var n = Math.floor(num / 4);

			if (num % 4 == 0) {
				n--;
			}

			minutes += (n + 4);
			found = true;
			continue;
		}
		min = num;
	}

	if (found) {
		return minutes;
	} else if (min === 4) {
		return 3;
	} else if (min > 4) {
		return 4;
	}
	return min;
}

function calcSplits(plate) {
	var start;
	if (plate % 2 === 0) {
		start = plate / 2;
	} else {
		start = Math.floor(plate / 2) + 1;
	}

	var result = [];
	for (var i = start; i < plate - 1; ++i) {
		result.push([i, plate - i]);
	}
	return result;
}

function addSplit(split, plates) {
	plates = plates.concat(split);
	return plates.sort();
}

function calcScenarios(splits, plates) {
	var result = [];

	for (var i = 0; i < splits.length; ++i) {
		result.push(addSplit(splits[i], plates));
	}

	return result;
}

function solve2(plates) {
	plates = plates.slice().sort();
	var maxStack = plates.pop();

	if (maxStack >= 4) {
		var splits = calcSplits(maxStack);
		var scenarios = calcScenarios(splits, plates);
		var min = maxStack;
		for (var i = 0; i < scenarios.length; ++i) {
			min = Math.min(min, 1 + solve2(scenarios[i]));
		}
		return min;
	} else {
		return maxStack;
	}
}

challenge.start(function (data) {
	var plates = data[1].split(' ').parseIntAll(10),
		result = solve2(plates);

	return result;
}, function(ans, data) {
	var plates = data[1].split(' ').parseIntAll(10),
		highest = Array.max(plates);

	if (ans > highest) {
		return String.format('{0} provided, could eat all in {1}', ans, highest);
	}
});