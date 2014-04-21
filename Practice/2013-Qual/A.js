var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: 5
	});

function rotate(grid) {
	var temp = new Array(grid.length);
	for (var i = 0; i < temp.length; ++i) {
		temp[i] = new Array(temp.length);
		for (var j = 0; j < temp.length; ++j) {
			temp[i][j] = grid[temp.length - j - 1][i];
		}
	}
	return temp;
}

challenge.start(function (data) {
	data.splice(4, 1);
	var complete = true;
	data = data.map(function(el) {
		if (complete && el.indexOf('.') !== -1) {
			complete = false;
		}
		return el.split('');
	});
	var rotated = rotate(data);
	
	for (var i = 0; i < data.length; i++) {
		if ((data[i].join('').match(/[XT]/g) || []).length === 4) {
			return 'X won';
		} else if ((data[i].join('').match(/[OT]/g) || []).length === 4) {
			return 'O won';
		} else if ((rotated[i].join('').match(/[XT]/g) || []).length === 4) {
			return 'X won';
		} else if ((rotated[i].join('').match(/[OT]/g) || []).length === 4) {
			return 'O won';
		}
	}

	var diagRise = [],
		diagFall = [];
	for (var j = 0; j < data.length; j++) {
		diagFall.push(data[j][j]);
		diagRise.push(data[data.length - 1 - j][j]);
	}

	if ((diagFall.join('').match(/[XT]/g) || []).length === 4) {
		return 'X won';
	} else if ((diagFall.join('').match(/[OT]/g) || []).length === 4) {
		return 'O won';
	} else if ((diagRise.join('').match(/[XT]/g) || []).length === 4) {
		return 'X won';
	} else if ((diagRise.join('').match(/[OT]/g) || []).length === 4) {
		return 'O won';
	}

	if (complete) {
		return 'Draw';
	} else {
		return 'Game has not completed';
	}
});