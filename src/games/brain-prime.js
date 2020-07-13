import random from 'random';
import answer from '../index.js';

const showQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const randomNumber = random.int(1, 100);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => answer(showQuestion, primeGame);
