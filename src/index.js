#!/usr/bin/env node index.js

import readlineSync from 'readline-sync';
import random from 'random';

function welcome() {
	console.log('Welcome to the Brain Games!');
};
const name = readlineSync.question('May I have your name? ');
function hello() {
	console.log(`Hello,  ${name}!`);
};
const numberOfRounds = 3;
let correctAnswers = 0;
function stringAnswer(answer, expectedAnswer) {
	for (let i = 0; i < numberOfRounds; i += 1) {
	
		if (expectedAnswer !== answer) {
			console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
			console.log(`Let's try again, ${name}`);
			break;
		} if (expectedAnswer === answer) {
			correctAnswers += 1;
			console.log('Correct!');
			break;
		};
	};
	function congratulations() {
		if (correctAnswers === numberOfRounds) {
			console.log(`Congratulations, ${name}!`);
		};
	};
	congratulations();
};

function numericalAnswer(answer, expectedAnswer) {
	for (let i = 0; i < numberOfRounds; i += 1) {
		if (expectedAnswer !== +answer) {
			console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
			console.log(`Let's try again, ${name}`);
			break;
		} if (expectedAnswer === +answer) {
			correctAnswers += 1;
			console.log('Correct!');
			break;
		};
	};
	function congratulations() {
		if (correctAnswers === numberOfRounds) {
			console.log(`Congratulations, ${name}!`);
		};
	};
	congratulations();
};

export { welcome, name, hello, stringAnswer, numericalAnswer };
