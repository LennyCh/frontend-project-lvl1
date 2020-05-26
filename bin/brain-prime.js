#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
import { welcome, name, hello, stringAnswer } from '../src/index.js';
import { isPrime } from '../src/games/brain-prime.js';

welcome();
name;
hello();

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
