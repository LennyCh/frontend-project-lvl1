#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const printName = readlineSync.question('May I have your name? ');
console.log(`Hello,  ${printName}!`);

export default printName;
