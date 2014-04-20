var codejam = require('../codejam'),
	challenge = new codejam.Challenge();

function trim(number, length) {
	var out = number.toString();
	while (out.length < length) {
		out = '0' + out;
	}
	if (out.length > length) {
		out = out.substring(out.length - 4);
	}
	return out;
}

var string = 'welcome to code jam';

function countInstances(find, inString) {
	var count = 0;
	for (var i = 0; i < inString.length; i++) {
		if (inString[i] === find) {
			count++;
		}
	}
	return count;
}

// Caches results so we can reuse them
var solutionBank = {};
function addToSolutionBank(find, inString, count) {
	var findBank = solutionBank[find];
	if (!findBank) {
		findBank = {};
		solutionBank[find] = findBank;
	}

	findBank[inString.substr(inString.indexOf(find[0]))] = count;
}

function getFromSolutionBank(find, inString) {
	var findBank = solutionBank[find];
	if (!findBank) {
		return;
	}
	return findBank[inString.substr(inString.indexOf(find[0]))];
}

/* This solution was gained by looking at the solution for user Jarrod */
function findInstances(find, inString, depth) {
	depth = depth || 0;
	if (find.length === 0) {
		return 0;
	}else if (find.length == 1) {
		return countInstances(find, inString);
	}

	var count = 0,
		idx = 0;

	while (idx > -1) {
		idx = inString.indexOf(find[0], idx);
		if (idx > -1) {
			var nextFind = find.substr(1),
				nextInString = inString.substr(idx + 1),
				subCount = getFromSolutionBank(nextFind, nextInString) || findInstances(nextFind, nextInString, depth + 1);

			if (subCount === 0) {
				break;
			}
			count += subCount;
			if (count > 10000) {
				count -= 10000;
			}
			idx++;
		}
	}

	addToSolutionBank(find, inString, count);
	return count;
}

challenge.start(function(data) {
	return trim(findInstances(string, data[0]), 4);
});


function smallOnly(data) {
	var text = data[0],
		total = 0;

	// No point considering chars that don't appear in the string
	text = text.replace(new RegExp('[^' + string + ']', 'g'), '');

	// Not going to get a match if the input is shorter than string
	if (text.length < string.length) {
		return trim(0, 4);
	}

	// If input doesn't contain one of the chars in string then won't get a match
	for (var i = 0; i < string.length; i++) {
		if (text.indexOf(string[i]) === -1) {
			return trim(0, 4);
		}
	}

	var indicies = [];
	for (var j = 0; j < text.length; j++) {
		indicies.push(j);
	}

	function combinationUtil(input, desiredSize, curIdx, tmpArr, tmpIdx) {
		if (tmpIdx === desiredSize) {
			total++;
			return;
		}

		if (curIdx >= input.length) {
			return;
		}

		if (text[input[curIdx]] === string[tmpIdx]) {
			tmpArr[tmpIdx] = input[curIdx];
			combinationUtil(input, desiredSize, curIdx + 1, tmpArr.slice(0), tmpIdx + 1);
		}

		combinationUtil(input, desiredSize, curIdx + 1, tmpArr.slice(0), tmpIdx);
	}

	combinationUtil(indicies, string.length, 0, [], 0);

	return trim(total, 4);
}