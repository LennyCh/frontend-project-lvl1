#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, numericalAnswer } from '../index.js';

welcome();
name;
hello();

console.log('What number is missing in the progression?');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number = random.int(1, 100);
	const dif = random.int(1, 100);
	let startNumber = number;
	let arithmeticProgression = [startNumber];
	const iters = 10;
	function progression() {
		for (let j = 1; j < iters; j += 1) {
			startNumber += dif;
			arithmeticProgression.push(startNumber);
		};
		return arithmeticProgression;
	};
	progression();
	let arrayForQuestion = arithmeticProgression;
	const hiddenPosition = random.int(0, 9);
	const expectedAnswer = arithmeticProgression[hiddenPosition];
	arrayForQuestion[hiddenPosition] = '..';

	console.log(`Question: ${arrayForQuestion}`);
	const answer = readlineSync.question('Your answer: ');

	numericalAnswer(answer, expectedAnswer);
}
