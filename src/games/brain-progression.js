import random from 'random';
import answer from '../index.js';

const showQuestion = 'What number is missing in the progression?';

const progression = (startNumber, dif, iters) => {
  let currentNumber = startNumber;
  const arithmeticProgression = [startNumber];
  for (let i = 0; i < iters; i += 1) {
    currentNumber += dif;
    arithmeticProgression.push(currentNumber);
  }
  return arithmeticProgression;
};

const progressionGame = () => {
  const startNumber = random.int(1, 100);
  const dif = random.int(1, 100);
  const iters = 10;
  const myProgression = progression(startNumber, dif, iters);
  const hiddenPosition = random.int(0, 9);
  const expectedAnswer = myProgression[hiddenPosition];
  myProgression[hiddenPosition] = '..';
  const question = myProgression.join(', ');
  return [question, expectedAnswer.toString()];
};

export default () => answer(showQuestion, progressionGame);
