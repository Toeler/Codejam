var fs = require('fs'),
	input = fs.readFileSync('A-small-attempt0.in').toString().split(/\n/g),
	casenum = 0;
	
var cases = input.shift();

function outputCase(answer) {
	var out = 'Case #' + casenum + ': ' + answer
	if (casenum < cases) {
		out += '\r\n';
	}
	fs.appendFileSync('A-small-attempt0.out', out);
	console.log('Case #' + casenum + ' complete');
}

// Delete any existing out file
if (fs.existsSync('A-small-attempt0.out')) {
	fs.unlinkSync('A-small-attempt0.out');
}

console.log(cases + ' cases');
while (casenum++ < cases) {
	//console.log('Case #' + casenum + ' started');
	var test1 = input.splice(0, 5);
	var test2 = input.splice(0, 5);
	
	var numbersInFirst = test1[test1[0]].split(/\s/g);
	var numbersInSecond = test2[test2[0]].split(/\s/g);
	
	var matches = [];
	for (var i = 0; i < numbersInFirst.length; i++) {
		for (var j = 0; j < numbersInSecond.length; j++) {
			if (numbersInFirst[i] === numbersInSecond[j]) {
				matches.push(numbersInFirst[i]);
			}
		}
	}
	
	if (matches.length > 0) {
		if (matches.length > 1) {
			outputCase('Bad magician!');
		} else {
			outputCase(matches[0]);
		}
	} else {
		outputCase('Volunteer cheated!');
	}
}