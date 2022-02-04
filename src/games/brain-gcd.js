import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const calculateGcd = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i >= 1; i -= 1) {
    const isDivider = (num1 % i === 0) && (num2 % i === 0);
    if (isDivider) {
      return String(i);
    }
  }

  return null;
};

const initQuestionAnswer = () => {
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const question = `${num1} ${num2}`;
  if (calculateGcd(num1, num2)) {
    return { question, correctAnswer: calculateGcd(num1, num2) };
  }

  return null;
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  return startGame(rule, initQuestionAnswer);
};
