import random from 'random';
import startGame from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = random.int(1, 100);
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => startGame(gameQuestion, primeGame);
