import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const initQuestionAnswer = () => {
  const potentialOperators = ['+', '-', '*'];
  const operator = potentialOperators[initRandomNum(0, 3)];
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer = '';

  switch (operator) {
    case potentialOperators[0]:
      correctAnswer = String(num1 + num2);
      break;

    case potentialOperators[1]:
      correctAnswer = String(num1 - num2);
      break;

    default:
      correctAnswer = String(num1 * num2);
  }

  return { question, correctAnswer };
};

export default () => {
  const rule = 'What is the result of the expression?';
  return startGame(rule, initQuestionAnswer);
};
