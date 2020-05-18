#!/usr/bin/env node

const GCD = (number1, number2) => {
	const numberOfArguments = 2;
	let a = number1;
	let b = number2;
	for (let j = 1; j < numberOfArguments; j += 1) {
		while (a && b) {
			a > b ? a %= b : b %= a;
		} a += b;
	} return a;
};

export { GCD };
