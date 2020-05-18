#!/usr/bin/env node

function progression(tartNumber, dif, arithmeticProgression) {
	let iters = 10;
	for (let j = 1; j < iters; j += 1) {
		startNumber += dif;
		arithmeticProgression.push(startNumber);
	};
	return arithmeticProgression;
};

export { progression };
