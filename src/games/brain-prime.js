import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const initQuestionAnswer = () => {
  const question = initRandomNum(2);
  for (let i = Math.floor(question / 2); i >= 2; i -= 1) {
    if (question % i === 0) {
      const correctAnswer = 'no';
      return { question, correctAnswer };
    }
  }

  const correctAnswer = 'yes';
  return { question, correctAnswer };
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(rule, initQuestionAnswer);
};
