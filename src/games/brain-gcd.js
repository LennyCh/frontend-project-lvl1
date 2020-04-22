#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, numericalAnswer } from '../index.js';

welcome();
name;
hello();

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

console.log('Find the greatest common divisor of given numbers.');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number1 = random.int(1, 100);
	const number2 = random.int(1, 100);
	console.log(`Question: ${number1}, ${number2}`);
	const answer = readlineSync.question('Your answer: ');
	const expectedAnswer = GCD(number1, number2);
	numericalAnswer(answer, expectedAnswer);
}
