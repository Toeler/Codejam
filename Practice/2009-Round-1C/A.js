var codejam = require('../codejam'),
	challenge = new codejam.Challenge();


/* Javascript screws up with this:
 * 1023456789abcde base 15 should
 * be 29480883458974409 but it returns
 * 29480883458974410 (10 not 09 at end)
*/
challenge.start(function (data) {
	data = data[0];
	var alph = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
		assignments = {},
		number = '';

	for (var i = 0; i < data.length; i++) {
		if (!assignments[data[i]]) {
			assignments[data[i]] = alph.splice(i === 0 ? 1 : 0, 1);
		}

		number += assignments[data[i]];
	}

	var base = (36 - alph.length);
	return parseInt(number, base < 2 ? 2 : base);
});