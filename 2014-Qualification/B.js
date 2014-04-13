var filename = 'B-large',
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
	var params = input.splice(0, 1)[0].split(/\s/g);
	var price = parseFloat(params[0]),
		increase = parseFloat(params[1]),
		goal = parseFloat(params[2]),
		current = 0,
		payload = 2,
		time = 0;
	
	while (current < goal) {
		// Time to goal with current payload
		var timeToGoal = (goal - current) / payload;
		
		var timeToUpgrade = (price - current) / payload;
		var timeToGoalWithUpgrade = (goal / (payload + increase)) + timeToUpgrade;
		
		if (timeToGoal < timeToGoalWithUpgrade) {
			// Faster to not buy any any just wait
			time += timeToGoal;
			current = goal;
		} else {
			// Faster to buy an upgrade
			time += timeToUpgrade;
			current = 0;
			payload += increase;
		}
	}
	
	outputCase(time.toFixed(7));
}