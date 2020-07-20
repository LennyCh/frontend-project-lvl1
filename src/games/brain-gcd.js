import random from 'random';
import startGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const GCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  if (a === 0) {
    return b;
  }
  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gcdGame = () => {
  const randomNumber1 = random.int(1, 100);
  const randomNumber2 = random.int(1, 100);
  const question = `${randomNumber1}, ${randomNumber2}`;
  const expectedAnswer = GCD(randomNumber1, randomNumber2).toString();
  return [question, expectedAnswer];
};

export default () => startGame(gameQuestion, gcdGame);
