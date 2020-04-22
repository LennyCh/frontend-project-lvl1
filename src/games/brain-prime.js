#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, stringAnswer } from '../index.js';
 
welcome();
name;
hello();

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

console.log('Answer "yes" if given  number is prime. Otherwise answer "no".');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	const number = random.int(1, 100);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question('Your answer: ');
	const expectedAnswer = isPrime(number) ? 'yes' : 'no';
	
	stringAnswer(answer, expectedAnswer);
}
