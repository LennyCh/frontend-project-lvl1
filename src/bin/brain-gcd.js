#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, numericalAnswer } from '../index.js';
import { GCD } from '../games/brain-gcd.js';

welcome();
name;
hello();

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
