import readlineSync from 'readline-sync';
import name from './cli.js';

export const initRandomNum = () => Math.floor(Math.random() * 100) + 1;

export const startGame = (initQuestionAnswer) => {
  let questionNumber = 1;
  while (questionNumber <= 3) {
    const { question, correctAnswer } = initQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      questionNumber += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};