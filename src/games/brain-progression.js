#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello,  ${name}!`);

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

	if (expectedAnswer !== +answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
		console.log(`Let's try again, ${name}`);
		break;
	} if (expectedAnswer === +answer) {
		correctAnswers += 1;
		console.log('Correct!');
	};
	if (correctAnswers === numberOfRounds) {
		console.log(`Congratulations, ${name}!`);
	};
}
