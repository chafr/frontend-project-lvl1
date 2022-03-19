import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const initQuestionAnswer = () => {
  const potentialOperators = ['+', '-', '*'];
  const operatorsCount = potentialOperators.length;
  const operator = potentialOperators[initRandomNum(0, operatorsCount)];
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const question = `${num1} ${operator} ${num2}`;
  const [sum, diff, multiply] = potentialOperators;
  let correctAnswer = '';

  switch (operator) {
    case sum:
      correctAnswer = String(num1 + num2);
      break;

    case diff:
      correctAnswer = String(num1 - num2);
      break;

    case multiply:
      correctAnswer = String(num1 * num2);
      break;

    default:
      return 'Error: unknown operation';
  }

  return { question, correctAnswer };
};

export default () => {
  const rule = 'What is the result of the expression?';
  return startGame(rule, initQuestionAnswer);
};
