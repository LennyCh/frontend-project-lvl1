#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
 
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello,  ${name}!`);
 
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number = random.int(1, 100);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question('Your answer: ');
	const isPrime = (number) => {
		if (number < 2) {
			return false;
		}
		for (let i = 2; i < number; i += 1) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	};
	const expectedAnswer = isPrime(number) ? 'yes' : 'no';
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
