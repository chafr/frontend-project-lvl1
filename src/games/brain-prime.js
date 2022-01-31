import name from '../cli.js';
import { initRandomNum } from '../index.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export default () => {
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
