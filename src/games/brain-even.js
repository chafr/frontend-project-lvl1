import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const initQuestionAnswer = () => {
  const question = initRandomNum();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(rule, initQuestionAnswer);
};
