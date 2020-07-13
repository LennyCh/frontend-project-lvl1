import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const answer = (showQuestion, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${name}!`);
  console.log(showQuestion);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, expectedAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default answer;
