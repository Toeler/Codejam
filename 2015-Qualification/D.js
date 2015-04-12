var codejam = require('./codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 1,
		inputPreProcessorFn: generateNominoes
	});

// Don't try to understand this, I barely do...
// NOTE: REQUIRES --max-old-space-size=8192 (or something bigger than ~2 gig) because it is unoptimised

function generateNominoes() {
	var result = [];

	// No point doing more than 6, because 7+ will always be impossible
	result[1] = [
		[
			[1]
		]
	];
	result[2] = [
		[
			[1, 0],
			[1, 0]
		]
	];
	result[3] = [
		[
			[1, 0, 0],
			[1, 0, 0],
			[1, 0, 0]
		],
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 0, 0]
		]
	];
	result[4] = [
		[
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0]
		],
		[
			[1, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	];
	result[5] = [
		[
			[0, 1, 1, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 0, 1, 0, 0],
			[1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		]
	];
	result[6] = [
		[
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 1, 1, 0, 0, 0],
			[1, 0, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[1, 0, 0, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 1, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 1, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		],
	];

	return result;
}

function getNominoWidthHeight(nomino) {
	var lowestIndex = 0,
		rightMostIndex = 0;

	for (var y = 0; y < nomino.length; ++y) {
		for (var x = 0; x < nomino[y].length; ++x) {
			if (nomino[y][x] === 1) {
				if (y > lowestIndex) {
					lowestIndex = y;
				}
				if (x > rightMostIndex) {
					rightMostIndex = x;
				}
			}
		}
	}

	return [rightMostIndex + 1, lowestIndex + 1];
}

function fillNominoRight(nomino, numToAdd) {
	for (var i = 0; i < nomino.length; ++i) {
		nomino[i] = nomino[i].concat(Array.apply(null, new Array(numToAdd)).map(Number.prototype.valueOf, 0));
	}
	return nomino;
}

function fillNominoBottom(nomino, numToAdd) {
	return nomino.concat(Array.apply(null, new Array(numToAdd)).map(function() {
		return Array.apply(null, new Array(nomino[0].length)).map(Number.prototype.valueOf, 0);
	}));
}

function clampNominoWidth(nomino, width) {
	return nomino.map(function(row) {
		return row.slice(0, width);
	});
}

function clampNominoHeight(nomino, height) {
	return nomino.slice(0, height);
}

function moveNominoToTopLeft(nomino) {
	var highestIndex = nomino.length,
		leftMostIndex = nomino[0].length;

	for (var y = 0; y < nomino.length; ++y) {
		for (var x = 0; x < nomino[y].length; ++x) {
			if (nomino[y][x] === 1) {
				if (y < highestIndex) {
					highestIndex = y;
				}
				if (x < leftMostIndex) {
					leftMostIndex = x;
				}
			}
		}
	}

	if (highestIndex > 0) {
		nomino = nomino.concat(nomino.splice(0, highestIndex));
	}

	if (leftMostIndex > 0) {
		nomino = nomino.map(function(row) {
			return row.concat(row.splice(0, leftMostIndex));
		});
	}

	return nomino;
}

function rotateNomino(nomino) {
	var n = nomino.length,
		newNomino = JSON.parse(JSON.stringify(nomino));

	if (n === 1) {
		return nomino;
	}

	for (var i = 0; i < n / 2; ++i) {
		for (var j = i; j < n - i - 1; ++j) {
			newNomino[i][j] = nomino[n-j-1][i];
			newNomino[n-j-1][i] = nomino[n-i-1][n-j-1];
			newNomino[n-i-1][n-j-1] = nomino[j][n-i-1];
			newNomino[j][n-i-1] = nomino[i][j];
		}
	}

	newNomino = moveNominoToTopLeft(newNomino);

	return newNomino;
}

function printNomino(nomino) {
	return nomino.map(function(row) {
		return row.join('');
	}).join('\r\n');
}

// Calculates all of the ways that all of the X-ominoes can fit into an r*c grid
function generateMatrix(r, c, nominoes) {
	var result = [], nominoLookup = {}, uniqueNominoes = [];

	for (var i = 0; i < nominoes.length; ++i) {
		var nominoOrig = nominoes[i],
			canFitThis = false,
			nomino = JSON.parse(JSON.stringify(nominoOrig)),
			lastNomino = JSON.parse(JSON.stringify(nomino)),
			tempNominos = [];
		printNomino(nomino); // debug
		for (var rotations = 0; rotations < 4; ++rotations) {
			if (rotations > 0) {
				nomino = rotateNomino(lastNomino);
				lastNomino = JSON.parse(JSON.stringify(nomino));

				if (!tempNominos.contains(JSON.stringify(nomino))) {
					tempNominos.push(JSON.stringify(nomino));
				} else {
					continue;
				}
			} else {
				tempNominos.push(JSON.stringify(nomino));
			}

			var trimmedWidthHeight = getNominoWidthHeight(nomino);

			if (trimmedWidthHeight[0] > r) {
				continue; // Too wide
			} else if (nomino[0].length < r) {
				// Pad right with 0s so it is the same as the board
				nomino = fillNominoRight(nomino, r - nomino[0].length);
			} else {
				nomino = clampNominoWidth(nomino, r);
			}
			if (trimmedWidthHeight[1] > c) {
				continue; // Too high;
			} else if (nomino.length < c) {
				// Pad bottom with 0s so it is the same as the board
				nomino = fillNominoBottom(nomino, c - nomino.length);
			} else {
				nomino = clampNominoHeight(nomino, c);
			}

			for (var j = 0; j < (r * c); ++j) {
				var matrix;

				matrix = [].concat.apply([], nomino);

				var newMatrix = Array.apply(null, new Array(j)).map(Number.prototype.valueOf, 0).concat(matrix);

				var jumpDown = false;
				for (var k = 1; k <= c && !jumpDown && j !== 0; ++k) {
					if (newMatrix[r * k] === 1) {
						jumpDown = true;
					}
				}

				if (jumpDown) {
					j = (Math.ceil(j / r) * r);
					newMatrix = Array.apply(null, new Array(j)).map(Number.prototype.valueOf, 0).concat(matrix);
				}

				var extra = newMatrix.length - (r * c);
				if (extra > 0) {
					var removed = newMatrix.splice(-extra, newMatrix.length);
					if (removed.indexOf(1) === -1) {
						canFitThis = true;
						if (nominoLookup[(JSON.stringify(newMatrix))] === undefined) {
							nominoLookup[JSON.stringify(newMatrix)] = JSON.stringify(nominoOrig);
						} else {
							console.error(String.format('SAME MATRIX! Nomino:\r\n{0} has a matrix of {1} but so does Nomino:\r\n{2}',
								printNomino(JSON.parse(nominoLookup[JSON.stringify(newMatrix)])),
								JSON.stringify(newMatrix),
								printNomino(nominoOrig)
							));
						}
						uniqueNominoes.pushIfNotExists(JSON.stringify(nominoOrig));
						result.push(newMatrix);
					} else {
						continue;
					}
				} else {
					if (newMatrix.length < (r * c)) {
						newMatrix = newMatrix.concat(Array.apply(null, new Array((r * c) - newMatrix.length)).map(Number.prototype.valueOf, 0));
					}

					canFitThis = true;
					if (nominoLookup[(JSON.stringify(newMatrix))] === undefined) {
						nominoLookup[JSON.stringify(newMatrix)] = JSON.stringify(nominoOrig);
					} else {
						console.error(String.format('SAME MATRIX! Nomino:\r\n{0} has a matrix of {1} but so does Nomino:\r\n{2}',
							printNomino(JSON.parse(nominoLookup[JSON.stringify(newMatrix)])),
							JSON.stringify(newMatrix),
							printNomino(nominoOrig)
						));
					}
					uniqueNominoes.pushIfNotExists(JSON.stringify(nominoOrig));
					result.push(newMatrix);
				}
			}
		}

		if (!canFitThis) {
			return false;
		}
	}

	return {matrix: result, nominoLookup: nominoLookup, uniqueNominoes: uniqueNominoes};
}

function canStump(matrix, fullColumnMatrix, columnCount, uniqueNominoes, nominoLookup, nominoesUsed) {
	nominoesUsed = nominoesUsed.slice();
	uniqueNominoes = uniqueNominoes.slice();
	fullColumnMatrix = fullColumnMatrix.slice();

	if (matrix.length === 0) {
		if (columnCount > 0) {
			return true; // true = there are unsolved columns
		}
		return nominoesUsed; // we can solve this
	}

	var lowestColIdx = Infinity;

	for (var col = 0; col < matrix[0].length; ++col) {
		var total = 0;
		for (var row = 0; row < matrix.length; ++row) {
			if (matrix[row][col] === 1) {
				++total;
			}
		}
		if (total > 0 && total < lowestColIdx) {
			lowestColIdx = col;
		}
	}

	if (lowestColIdx !== Infinity) {
		for (var row = 0; row < matrix.length && nominoesUsed.length != uniqueNominoes.length; ++row) {
			var newColCount = columnCount;
			if (matrix[row][lowestColIdx] === 1) {
				var matrix2 = JSON.parse(JSON.stringify(matrix)),
					fullColumnMatrix2 = JSON.parse(JSON.stringify(fullColumnMatrix)),
					movingRow = row;
				for (var col = matrix2[movingRow].length - 1; col >= 0; --col) {
					if (matrix2[movingRow][col] === 1) {
						for (var row2 = matrix2.length - 1; row2 >= 0; --row2) {
							if (row2 !== movingRow && matrix2[row2].splice(col, 1)[0] === 1) {
								matrix2.splice(row2, 1);
								fullColumnMatrix2.splice(row2, 1);
								if (row2 < movingRow) {
									--movingRow;
								}
							}
						}
						--newColCount;
					}
				}
				var nominoUsed = nominoLookup[JSON.stringify(fullColumnMatrix2[movingRow])],
					localNominoesUsed = [];
				localNominoesUsed.pushIfNotExists(nominoUsed);
				matrix2.splice(movingRow, 1);
				fullColumnMatrix2.splice(movingRow, 1);
				var result = canStump(matrix2, fullColumnMatrix2, newColCount, uniqueNominoes, nominoLookup, localNominoesUsed);

				if (result === true) {
					continue;
				} else if (result.length > 0) {
					// We can solve this using a combination of the nominos in result + nominosUsed
					for (var i = 0; i < result.length; ++i) {
						nominoesUsed.pushIfNotExists(result[i]);
					}
				}
			}
		}
	}

	return nominoesUsed;
}

challenge.start(function (data, nominoes) {
	var x = parseInt(data[0].split(' ')[0], 10),
		r = parseInt(data[0].split(' ')[1], 10),
		c = parseInt(data[0].split(' ')[2], 10);

	// Early out
	if (
		x >= 7
		|| ((r * c) % x) !== 0
		|| (x > r && x > c)
	) {
		return 'RICHARD';
	}

	var result = generateMatrix(r, c, nominoes[x]);
	//console.log(matrix);
	// matrix will be false if there is a nomino that Richard can pick that won't fit in the board
	if (!result) {
		return 'RICHARD';
	} else {
		var cs = canStump(result.matrix, result.matrix, result.matrix[0].length, result.uniqueNominoes, result.nominoLookup, []);

		if (cs === true || cs.length !== result.uniqueNominoes.length) {
			return 'RICHARD';
		}
	}

	return 'GABRIEL';
});
