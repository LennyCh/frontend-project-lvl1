#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import printName from '../bin/brain-games.js'

console.log('Welcome to the Brain Games!');
const name = printName();
console.log(`Hello,  ${name}!`);

console.log('What is the result of the expression?');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number1 = random.int(1, 100);
	const number2 = random.int(1, 100);

	const arithmeticSigns = ['+', '-', '*'];
	const randomSign = Math.floor(Math.random() * arithmeticSigns.length);
	const sign = arithmeticSigns[randomSign];

	console.log(`Question: ${number1} ${sign} ${number2}`);
	
	const answer = readlineSync.question('Your answer: ');

	const calc = (number1, number2, sign) => {
		let result = 0;
		if (sign === '+') {
		 	result = +number1 + +number2;
		} if (sign === '-') {
			result = +number1 - +number2;
		} if (sign === '*') {
			result = +number1 * +number2;
		}
		return result;
	};

	const expectedAnswer = calc(number1, number2, sign);

	if (expectedAnswer !== +answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
		console.log(`Let's try again, ${name}!`);
		break;
	} if (expectedAnswer === +answer) {
		correctAnswers += 1;
		console.log('Correct!');
	};
	if (correctAnswers === numberOfRounds) {
		console.log(`Congratulations, ${name}!`);
	};
}
