var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		numCasesFn: function(input) {
			return input[0].split(' ')[2];
		},
		inputPreProcessorFn: function(input) {
			var data = input.splice(0, 1),
				numDict = data[0].split(' ')[1];

			return input.splice(0, numDict);
		}
	});

challenge.start(function(data, extraData) {
	var input = data[0];

	var varied = false,
		arr = [],
		combinations = 0;

	for (var i = 0; i < input.length; i++) {
		if (input[i] === '(') {
			varied = true;
			arr.push([]);
			continue;
		} else if (input[i] === ')') {
			varied = false;
			continue;
		}

		if (varied) {
			arr[arr.length - 1].push(input[i]);
		} else {
			arr.push([input[i]]);
		}
	}

	for (var j = 0; j < extraData.length; j++) {
		var match = true;
		for (var k = 0; k < extraData[j].length; k++) {
			if (arr[k].indexOf(extraData[j][k]) === -1) {
				match = false;
				break;
			}
		}
		if (match) {
			combinations++;
		}
	}

	return combinations;
});