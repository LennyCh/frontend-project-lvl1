#!/usr/bin/env node

import readlineSync from 'readline-sync';
import random from 'random';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? '); 
console.log(`Hello,  ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number = random.int(1, 100);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question('Your answer: ');
	const isEven = number => number % 2 === 0;
	const expectedAnswer = isEven(number) ? 'yes' : 'no';
	
	if (expectedAnswer !== answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
		console.log(`Let's try again, ${name}`);
		break;
	} if (expectedAnswer === answer) {
		correctAnswers += 1;
		console.log('Correct!');
	};
	
	if (correctAnswers === numberOfRounds) {
		console.log(`Congratulations, ${name}!`);
	};
}
