import random from 'random';
import answer from '../index.js';

const showQuestion = 'What is the result of the expression?';

const calc = (number1, number2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = +number1 + +number2;
      break;
    case '-':
      result = +number1 - +number2;
      break;
    case '*':
      result = +number1 * +number2;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const calcGame = () => {
  const randomNumber1 = random.int(1, 100);
  const randomNumber2 = random.int(1, 100);
  const arithmeticSigns = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arithmeticSigns.length);
  const randomSign = arithmeticSigns[rand];
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const expectedAnswer = calc(randomNumber1, randomNumber2, randomSign);
  return [question, expectedAnswer.toString()];
};

export default () => answer(showQuestion, calcGame);
