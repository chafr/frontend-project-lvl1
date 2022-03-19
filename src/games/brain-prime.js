import initRandomNum from '../init-random-num.js';
import startGame from '../index.js';

const isPrime = (num) => {
  for (let i = Math.floor(num / 2); i >= 2; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const initQuestionAnswer = () => {
  const question = initRandomNum(2);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(rule, initQuestionAnswer);
};
