import random from 'random';
import answer from '../index.js';

const showQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const randomNumber = random.int(1, 100);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => answer(showQuestion, evenGame);
