var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: function(input) {
			return parseInt(input.slice(0, 1)[0].split(' ')[0]) + 1;
		}
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
	var params = data.splice(0, 1)[0].split(' ').map(function(el) { return parseInt(el); }),
		board = rotate(data.map(function(el) { return el.split(''); })),
		lines = [],
		winB = false,
		winR = false;

	// Gravity
	for (var i = params[0] - 2; i >= 0; i--) {
		for (var j = 0; j < params[0]; j++) {
			var idx = i;
			while (idx < params[0] - 1 && board[idx][j] !== '.' && board[idx + 1][j] === '.') {
				board[idx + 1][j] = board[idx][j];
				board[idx][j] = '.';

				idx++;
			}
		}
	}

	var boardR = rotate(board); // Easier to check rows than columns
	for (i = 0; i < params[0] && (!winB || !winR); i++) {
		lines.push(board[i].join(''));
		lines.push(boardR[i].join(''));
	}

	// Diagonals
	for (var col = 1 - params[0]; col < params[0]; col++) {
		var tmp1 = [],
			tmp2 = [];
		for (var row = 0; row < params[0]; row++) {
			if ((col + row) >= 0 && (col + row) < params[0]) {
				tmp1.push(board[row][col + row]);
				tmp2.push(board[row][params[0] - (col + row) - 1]);
			}
		}
		if (tmp1.length >= params[1]) {
			lines.push(tmp1.join(''));
		}
		if (tmp2.length >= params[1]) {
			lines.push(tmp2.join(''));
		}
	}

	winB = (lines.join(' ').match(new RegExp('B{' + params[1] + '}')) || []).length > 0;
	winR = (lines.join(' ').match(new RegExp('R{' + params[1] + '}')) || []).length > 0;

	if (winB && winR) {
		return 'Both';
	} else if (winB) {
		return 'Blue';
	} else if (winR) {
		return 'Red';
	} else {
		return 'Neither';
	}
});