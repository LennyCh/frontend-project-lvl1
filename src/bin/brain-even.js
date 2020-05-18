#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, stringAnswer } from '../index.js';
import { isEven } from '../games/brain-even.js';

welcome();
name;
hello();

console.log('Answer "yes" if the number is even, otherwise answer "no"');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number = random.int(1, 100);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question('Your answer: ');
	const expectedAnswer = isEven(number) ? 'yes' : 'no';

	stringAnswer(answer, expectedAnswer);
}
