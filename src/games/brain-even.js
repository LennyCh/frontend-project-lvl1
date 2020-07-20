import random from 'random';
import startGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const question = random.int(1, 100);
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => startGame(gameQuestion, evenGame);
