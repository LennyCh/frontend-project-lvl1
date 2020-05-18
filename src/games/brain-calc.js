#!/usr/bin/env node

const calc = (number1, number2, sign) => {
	let result = 0;
	switch (sign) {
		case '+':
			result = +number1 + +number2;
			break;
		case '-':
			result = +number1 - +number2;
			break;
		case '*':
			result = +number1 * +number2;
			break;
	}
	return result;
};

export { calc };
