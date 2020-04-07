#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
 
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello,  ${name}!`);
 
console.log('Find the greatest common divisor of given numbers.');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number1 = random.int(1, 100);
	const number2 = random.int(1, 100);
	console.log(`Question: ${number1}, ${number2}`);
	const answer = readlineSync.question('Your answer: ');

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
	 
	const expectedAnswer = GCD(number1, number2);

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
