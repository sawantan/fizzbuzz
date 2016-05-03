var count, fizzer, buzzer, fizzbuzzer;


exports.count = function(start, end) {
	//initialize the output and give it a value so that it will not be a null variable
	var output = '';

	//modify output to contain the desired sequence
	// the first term is the initial condition, second is the ending condition, third is the increment
	// for( [starting condition]; [ending condition]; increment)
	for (var counter = start; counter < end; counter += 1) {
		// stuff here gets repeated
		//at the beginning of each iteration of the loop, append = ""
		var append = ''
		if (counter % 3 === 0) {
			append += 'fizz';
		}

		if (counter % 5 === 0) {
			append += 'buzz';
		}

		if (append == '') {
		output += counter + ' ';
		} else {
		output += append + ' ';
		}

	}
	//returns the output of the loop
	return output;
};
