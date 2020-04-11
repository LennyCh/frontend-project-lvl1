#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
 

function stringAnswer() {
	if (expectedAnswer !== answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
		console.log(`Let's try again, ${name}`);
		break;
	} if (expectedAnswer === answer) {
		correctAnswers += 1;
		console.log('Correct!');
	};
};
function numericalAnswer() {
	if (expectedAnswer !== answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
		console.log(`Let's try again, ${name}`);
		break;
	} if (expectedAnswer === answer) {
		correctAnswers += 1;
		console.log('Correct!');
	};
};
function congratulations() {
	if (correctAnswers === numberOfRounds) {
		console.log(`Congratulations, ${name}!`);
	};
};

export { stringAnswer, numericalAnswer, congratulations } 
