/*
 * This file contains a generic class that parses input files,
 * and handles outputting the answer. Configurable via a config
 * object passed into the constructor.
 */

var fs = require('fs');

var codejam = {};

(function() {
	var Challenge = function Challenge(config) {
		this.initialise(config || {});
	};
	
	var p = Challenge.prototype;

	p.filename = undefined;
	p.outputToFile = true;
	p.outputToConsole = false;
	p.supressConsole = false;
	p.linesPerCase = 1;
	p.caseFormat = 'Case #{0}: {1}';
	p.numCasesFn = undefined;
	p.inputPreProcessorFn = undefined;
	
	/*
		filename:	The value passed to fs.readFile for the filename.
					Will use first argument, or the value passed in
					to the config, or will ask stdin for a filename.
		
		outputToFile:	If True, answer will be output to a file
						named filename.out. (default True)
		
		outputToConsole:	If True, answer will be output to stdout.
							(default False)
		
		supressConsole:	If True, case progress will not be output
						to stdout. (default False)
		
		linesPerCase:	The number of lines from input to read for
						each case. If value is 0 then the number
						of lines for a case is read from the input
						file. If value is a function then that
						function is called with the input, and must
						return the number of lines. (default 1)
		
		caseFormat:		The String.format used when outputting the
						answer for a case. 0th arg is the case
						number, 1st arg is the answer.
						(default Case #{0}: {1})

		numCasesFn:		Some cases might not start with the number
						of cases. This function can be used to get
						the number of cases from the input.

		inputPreProcessorFn:	Some inputs have some data to be used
								in each case, this function can collect
								that data and pass it to each case.
	*/
	p.initialise = function initialiseChallenge(config) {
		this.filename = process.argv[2] || config.filename;
		this.outputToFile = config.outputToFile || this.outputToFile;
		this.outputToConsole = config.outputToConsole || this.outputToConsole;
		this.supressConsole = config.supressConsole || this.supressConsole;
		this.linesPerCase = config.linesPerCase || this.linesPerCase;
		this.caseFormat = config.caseFormat || this.caseFormat;
		this.numCasesFn = config.numCasesFn;
		this.inputPreProcessorFn = config.inputPreProcessorFn;
		
		if (!this.filename) {
			// Get filename from stdin (http://stackoverflow.com/a/16048083)
			process.stdout.write('Please enter the name of the input file: ');
			var BUFSIZE = 256;
			var buf = new Buffer(BUFSIZE);
			var bytesRead = 0;
			try {
				bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE);
			} catch (e) {
				if (e.code === 'EAGAIN') {
					console.error('ERROR: interactive stdin input not supported.');
					process.exit(1);
				} else if (e.code === 'EOF') {
				}
				throw e;
			}
			if (bytesRead !== 0) {
				this.filename = buf.toString(null, 0, bytesRead);
			}
		}
	};
	
	function getInput(filename) {
		if (!fs.existsSync(filename)) {
			filename += '.in';
		}

		if (fs.existsSync(filename)) {
			return fs.readFileSync(filename).toString().split(/\r?\n/g) || [];
		}

		console.error('Error', 'No input found');
		return [];
	}
	
	function outputAnswers(config, answers) {
		if (config.outputToFile && !config.filename) {
			console.error('Error', 'Cannot output to file, no filename provided');
			config.outputToFile = false;
		}
		
		var output = answers.map(function(el, idx) {
			return String.format(config.caseFormat, idx + 1, el);
		}).join('\r\n');
		
		if (config.outputToFile) {
			var outFilename = config.filename + '.out';
			
			// Delete any existing output file so I don't have to keep doing so
			if (fs.existsSync(outFilename)) {
				fs.unlinkSync(outFilename);
			}
			
			fs.appendFileSync(outFilename, output);
		}
		if (config.outputToConsole) {
			console.log(output);
		}
	}
	
	p.start = function startChallenge(caseProcessorFn, caseCheckerFn) {
		var input = getInput(this.filename),
			answers = [];
		
		var cases,
			caseNum = 0,
			extraData;

		if (this.numCasesFn) {
			cases = this.numCasesFn(input);
		} else {
			cases = input.shift() || 0;
		}

		if (this.inputPreProcessorFn) {
			extraData = this.inputPreProcessorFn(input);
		}
		
		if (!this.supressConsole) {
			console.log('Cases found: ' + cases);
		}
		var times = [],
			errors = [];
		while (caseNum++ < cases) {
			var time = {};
			time.start = process.hrtime();
			if (!this.supressConsole) {
				console.log(String.format('Case #{0}: Begin', caseNum));
			}
			
			var caseData = null,
				numLines;
			if (Object.prototype.toString.call(this.linesPerCase) == '[object Function]') {
				numLines = this.linesPerCase(input);
				caseData = input.splice(0, numLines);
			} else if (this.linesPerCase === 0) {
				// We read the next line to get the number of lines for this case
				numLines = parseInt(input.splice(0, 1));
				caseData = input.splice(0, numLines);
			} else {
				caseData = input.splice(0, this.linesPerCase);
			}
			
			answers[caseNum - 1] = caseProcessorFn(caseData, extraData);
			var error;
			if (caseCheckerFn) {
				error = caseCheckerFn(answers[caseNum - 1], caseData);
			}
			
			if (error) {
				errors.push(String.format('Case #{0}: ERROR: {1}', caseNum, error));
			}
			
			time.elapsed = process.hrtime(time.start);//[1] / 1000000;
			time.elapsed = (time.elapsed[0] * 1000) + (time.elapsed[1] / 1000000);
			times[caseNum - 1] = time.elapsed;
			if (!this.supressConsole) {
				console.log(String.format('Case #{0}: Took {1}ms', caseNum, time.elapsed.toFixed(3)));
			}
		}
		if (!this.supressConsole) {
			console.log('All cases complete');
			console.log('--------------------');
			console.log('|    Time Stats    |');
			console.log('--------------------');
			var total = times.reduce(function(prev, current) {
				return prev + current;
			}, 0);
			var mean = Math.mean(times);
			var min = Array.min(times);
			var max = Array.max(times);
			console.log(String.format('Total: {0}ms', total.toFixed(3)));
			console.log(String.format('Mean: {0}ms', mean.toFixed(3)));
			console.log(String.format('Shortest: {0}ms (Case {1})', min.toFixed(3), times.indexOf(min) + 1));
			console.log(String.format('Longest: {0}ms (Case {1})', max.toFixed(3), times.indexOf(max) + 1));
			console.log('--------------------');
		}
		
		if (errors.length > 0) {
			console.log('--------------------');
			console.log('|      Errors      |');
			console.log('--------------------');
			for (var i = 0; i < errors.length; i++) {
				console.log(errors[i]);
			}
			console.log('--------------------');
		}

		if (answers.length > 0) {
			outputAnswers({
				filename: this.filename,
				caseFormat: this.caseFormat,
				outputToFile: this.outputToFile,
				outputToConsole: this.outputToConsole
			}, answers);
		}
	};
	
	codejam.Challenge = Challenge;
})();

module.exports = codejam;




/* Helper Functions */
// String.format (http://stackoverflow.com/a/4673436)
if (!String.format) {
	String.format = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match;
		});
	}
}

if (!String.prototype.repeat) {
	String.prototype.repeat = function (times) {
		return new Array(times + 1).join(this);
	};
}

// Mean
if (!Math.mean) {
	Math.mean = function(numbers) {
		var total = 0;
		
		for (var i = 0; i < numbers.length; i++) {
			total += numbers[i];
		}
		
		return total / numbers.length;
	}
}

// Min
if (!Array.min) {
	Array.min = function(array) {
		return Math.min.apply(null, array);
	}
}

// Max
if (!Array.max) {
	Array.max = function(array) {
		return Math.max.apply(null, array);
	}
}