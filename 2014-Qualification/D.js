var filename = 'D-large',
	fs = require('fs'),
	input = fs.readFileSync(filename + '.in').toString().split(/\n/g),
	casenum = 0;
	
var cases = input.shift();

function outputCase(answer) {
	var out = 'Case #' + casenum + ': ' + answer
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
	var params = input.splice(0, 3);
	var numWeights = parseInt(params[0]),
		nWeights = params[1].split(/\s/g).map(function(el) { return parseFloat(el); }).sort(),
		kWeights = params[2].split(/\s/g).map(function(el) { return parseFloat(el); }).sort(),
		nWeights2 = nWeights.slice(),
		kWeights2 = kWeights.slice(),
		nScore = 0,
		nScore2 = 0;
	
	// Deceitful War
	for (var i = 0; i < numWeights; i++) {
		// Deceitful War
		var nChoice;
		var kChoice;
		
		// Get rid of her ones that can never win.
		if (nWeights[0] < kWeights[0]) {
			// She says it is just under his heaviest so he plays that.
			nChoice = nWeights.shift();
			kChoice = kWeights.pop();
		} else {
			// She plays her lightest and says it is more than his
			// heaviest, so he plays his weakest
			nChoice = nWeights.shift();
			kChoice = kWeights.shift();
		}
		
		if (nChoice > kChoice) {
			nScore++;
		}
		
		// War
		var nChoice2 = nWeights2.shift(); // She selects her lightest
		var kChoice2 = null;
		kWeights2.some(function(el, idx) {
			if (el > nChoice2) {
				// He selects his lightest that will still beat hers
				kChoice2 = kWeights2.splice(idx, 1)[0];
				return true;
			} else {
				return false;
			}
		});
		
		if (!kChoice2) {
			// If he can't win he selects his lightest
			kWeights2.shift();
			nScore2++;
		}
	}
	
	outputCase(nScore + ' ' + nScore2);
}