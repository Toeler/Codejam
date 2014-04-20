var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: function(input) {
			var data = input.splice(0, 1)[0].split(' ');

			return parseInt(data[0]);
		},
		caseFormat: 'Case #{0}:\r\n{1}'
	});

challenge.start(function(data) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
		dx = [0, -1, 1, 0],
		dy = [-1, 0, 0, 1];

	var board = [],
		output = [];
	for (var i = 0; i < data.length; i++) {
		data[i] = data[i].split(' ').map(function(el) { return parseInt(el); });
		board[i] = [];
		output[i] = [];
	}

	var total = data.length * data[0].length,
		currNum = 0,
		set = 0;

	while (total > 0) {
		for (var row = 0; row < data.length; row++) {
			for (var col = 0; col < data[0].length; col++) {
				if (data[row][col] === currNum) {
					var lowest = undefined;
					for (var j = 0; j < 4; j++) {
						if (row + dy[j] >= 0 && row + dy[j] < data.length && col + dx[j] >= 0 && col + dx[j] < data[0].length) {
							if ((!lowest && data[row + dy[j]][col + dx[j]] < data[row][col]) || (lowest && data[row + dy[j]][col + dx[j]] < lowest.val)) {
								if (!lowest) {
									lowest = {};
								}
								lowest.val = data[row + dy[j]][col + dx[j]];
								lowest.row = row + dy[j];
								lowest.col = col + dx[j];
							}
						}
					}

					if (lowest) {
						board[row][col] = board[lowest.row][lowest.col];
					} else {
						board[row][col] = set++;
					}
					total--;
				}
			}
		}
		currNum++;
	}

	total = data.length * data[0].length;

	var curSet = null;

	while (total > 0) {
		for (var k = 0; k < data.length; k++) {
			for (var l = 0; l < data[0].length; l++) {
				if (curSet == null && !output[k][l]) {
					curSet = board[k][l];
					output[k][l] = alphabet[0];
					total--;
				} else if (curSet != null && board[k][l] === curSet) {
					output[k][l] = alphabet[0];
					total--;
				}
			}
		}
		curSet = null;
		alphabet.splice(0, 1);
	}

	return output.map(function(el) { return el.join(' '); }).join('\r\n');
});