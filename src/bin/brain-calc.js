#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, numericalAnswer } from '../index.js';
import { calc } from '../games/brain-calc.js';

welcome();
name;
hello();

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

	const expectedAnswer = calc(number1, number2, sign);

	numericalAnswer(answer, expectedAnswer);
}
