#!/usr/bin/env node
 
import readlineSync from 'readline-sync';
import random from 'random';
import printName from './bin/brain-games.js'
 
console.log('Welcome to the Brain Games!');
const name = printName();
console.log(`Hello,  ${name}!`);
 
console.log('task text');
let correctAnswers = 0;
const numberOfRounds = 3;
for (let i = 0; i < numberOfRounds; i += 1) {
	 const Arguments = type: number;
	 console.log(`Question: ${Arguments}`);
	 const answer = readlineSync.question('Your answer: ');
	 const someFunction();
	 const expectedAnswer = someFunction();
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

