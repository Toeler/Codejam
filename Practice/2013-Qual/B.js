var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: function(input) {
			return parseInt(input.splice(0, 1)[0].split(' ')[0]);
		}
	});

function isPossible(board, row, col) {
	var horPos = true,
		vertPos = true;

	for (var j = 0; j < board[0].length && horPos; j++) {
		horPos &= (board[row][col] >= board[row][j]);
	}

	for (var i = 0; !horPos && i < board.length && vertPos; i++) {
		vertPos &= (board[row][col] >= board[i][col]);
	}

	return horPos || vertPos;
}

challenge.start(function (data) {
	var board = data.map(function(el) {
		return el.split(' ').map(function(num) {
			return parseInt(num)
		});
	});

	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			if (!isPossible(board, i, j)) {
				return 'NO';
			}
		}
	}

	return 'YES';
});