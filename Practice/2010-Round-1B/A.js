var codejam = require('../codejam'),
	challenge = new codejam.Challenge({
		linesPerCase: function(input) {
			var data = input.slice(0, 1)[0].split(' ');

			return parseInt(data[0]) + parseInt(data[1]) + 1;
		}
	});

function addPath(obj, desiredPath) {
	var mkdir = 0;

	if (obj[desiredPath[0]] == null) {
		obj[desiredPath[0]] = {};
		mkdir++;
	}

	if (desiredPath.length - 1 > 0) {
		mkdir += addPath(obj[desiredPath[0]], desiredPath.slice(1));
	}

	return mkdir;
}

challenge.start(function (data) {
	var params = data[0].split(' '),
		existingStr = data.splice(1, params[0]),
		neededStr = data.splice(1, params[1]),
		existing = {},
		output = 0;

	for (var i = 0; i < existingStr.length; i++) {
		addPath(existing, existingStr[i].split('/').slice(1));
	}
	for (var j = 0; j < neededStr.length; j++) {
		output += addPath(existing, neededStr[j].split('/').slice(1));
	}

	return output;
});