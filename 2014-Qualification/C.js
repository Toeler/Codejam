var filename = 'C-large',
	fs = require('fs'),
	input = fs.readFileSync(filename + '.in').toString().split(/\n/g),
	casenum = 0;
	
var cases = input.shift();

function outputCase(answer, newline) {
	var out = 'Case #' + casenum + ':';
	out += (newline ? '\r\n' : ' ');
	out += answer;
	if (casenum < cases) {
		out += '\r\n';
	}
	fs.appendFileSync(filename + '.out', out);
	console.log('Case #' + casenum + ' complete');
}

// Delete any existing out file
if (fs.existsSync(filename + '.out')) {
	fs.unlinkSync(filename + '.out');
}

console.log(cases + ' cases');
while (casenum++ < cases) {
	var params = input.splice(0, 1)[0].split(/\s/g);
	var rows = parseInt(params[0]),
		cols = parseInt(params[1]),
		mines = parseInt(params[2]);
	
	var board = new Array(rows);
	for (var i = 0; i < rows; i++) {
		board[i] = Array.apply(null, Array(cols)).map(function() { return '.'; });
	}
	board[rows - 1][cols - 1] = 'c';
	
	var i = 0;
	
	// Outputs an entire row OR uses the rest of our mines in a row
	for (; (mines > 0) && (i < rows - 2) && (((mines > cols) && ((rows - i > 3) || ((mines - cols) % 2 === 0))) || (mines < (cols - 1)) || (mines == cols)); i++) {
		for (var j = 0; (mines > 0) && (j < cols); j++) {
			board[i][j] = '*';
			mines--;
		}
	}
	
	if (mines > 0) {
		if (rows > 1) {
			/*
				OK	OK	NO	NO
				00	**	1*	**
				0c	*c	1c	2c
				
				>0 won't auto appear
			*/
			var rowsLeft = rows - i;
			//		( More than space left				||		can't vertically fill ) 	&&		Can't completely fill all but click point
			if (((mines > ((cols * rowsLeft) - (rowsLeft * 2))) || (mines % rowsLeft > (rowsLeft - 2))) && mines !== ((cols * rowsLeft) - 1)) {
				// Can't vertically fill, but can we do some vertical and some horizontal
				if (mines % rowsLeft > (rowsLeft - 2)) {
					// Fill horizontally until 2 gaps on right
					var rowsNeeded = Math.floor(mines / (cols - 2));
					if ((rowsLeft - rowsNeeded) > 2) {
						for (var i2 = i; (mines > 0) && (i2 < rows); i2++) {
							for (var j = 0; (mines > 0) && j < (cols - 2); j++) {
								board[i2][j] = '*';
								mines--;
							}
						}
					}
				}
				
				if (mines > 0) {
					outputCase('Impossible', true);
					continue;
				}
			}
		}
		
		for (var j = 0; (mines > 0) && (j < cols); j++) {
			for (var i2 = i; (mines > 0) && (i2 < rows); i2++) {
				board[i2][j] = '*';
				mines--;
			}
		}
	}
	
	if (mines === 0) {
		outputCase(board.map(function(el) { return el.join(''); }).join('\r\n'), true);
	} else {
		outputCase('Impossible', true);
		console.error('\r\n' + board.map(function(el) { return el.join(''); }).join('\r\n'));
	}
}