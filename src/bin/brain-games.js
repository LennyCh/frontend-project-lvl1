#!/usr/bin/env node
const readline = require('readline-sync');

console.log('Welcome to the Brain Games!');
const name = readline.question('May I have your name? ');
console.log(`Hello, ${name}!`);
