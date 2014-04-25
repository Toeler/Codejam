var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 2
	});

function getLowestRoute(cells, toBeReleased) {
	var lowest;
	for (var i = 0; i < toBeReleased.length; i++) {
		var cellCopy = cells.slice(0),
			toBeCopy = toBeReleased.slice(0),
			idx = toBeReleased[i] - 1;
		cellCopy[idx] = 0;

		var numToBribe = 0;
		for (var j = idx - 1; j >= 0; j--) {
			if (cellCopy[j] === 1) {
				numToBribe++;
			} else {
				break;
			}
		}
		for (var k = idx + 1; k < cellCopy.length; k++) {
			if (cellCopy[k] === 1) {
				numToBribe++;
			} else {
				break;
			}
		}

		toBeCopy.splice(i, 1);
		numToBribe += getLowestRoute(cellCopy, toBeCopy);

		if (!lowest || numToBribe < lowest) {
			lowest = numToBribe;
		}
	}

	return lowest || 0;
}

/* Too slow for large */
challenge.start(function (data) {
	var numPrisoners = data[0].split(' ')[0],
		toBeReleased = data[1].split(' '),
		cells = [];

	for (var i = 0; i < numPrisoners; i++) {
		cells.push(1);
	}

	return getLowestRoute(cells, toBeReleased);
});