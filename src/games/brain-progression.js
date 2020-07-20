import random from 'random';
import startGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

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
  const progressionLength = 10;
  const myProgression = progression(startNumber, dif, progressionLength);
  const lastIndexInProgression = 9;
  const hiddenPosition = random.int(0, lastIndexInProgression);
  const expectedAnswer = myProgression[hiddenPosition];
  myProgression[hiddenPosition] = '..';
  const question = myProgression.join(', ');
  return [question, expectedAnswer.toString()];
};

export default () => startGame(gameQuestion, progressionGame);
