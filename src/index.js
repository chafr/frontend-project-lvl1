import readlineSync from 'readline-sync';
import name from './cli.js';

const initRandomNum = (minNum = 1, maxNum = 100) => Math.floor(Math.random() * maxNum) + minNum;

const startGame = (initQuestionAnswer) => {
  const questionsTotal = 3;
  let questionNumber = 1;
  while (questionNumber <= questionsTotal) {
    const { question, correctAnswer } = initQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      questionNumber += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { initRandomNum, startGame };
