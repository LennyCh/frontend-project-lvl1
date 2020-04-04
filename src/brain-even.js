#!/usr/bin/env node

const readline = require('readline-sync');
const random = require('random');

console.log('Welcome to the Brain Games!');
const name = readline.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i <= 2; i += 1) {
	const number = random.int(1, 100);
	console.log(`Question: ${number}`);
	const answer = readline.question('Your answer: ');
	const isEven = (number % 2 === 0) ? 'yes' : 'no';
	if (isEven !== answer) {
		console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven}"`);
		console.log(`Let's try again, ${name}!`);
		break;
	} if (isEven === answer) {
		console.log('Correct!');
	};
	if (i === 2) {
		console.log(`Congratulations, ${name}!`);
		break;
	};
}
