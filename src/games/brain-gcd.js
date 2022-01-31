import name from '../cli.js';
import { initRandomNum } from '../index.js';

console.log(`Hello, ${name}`);
console.log('Find the greatest common divisor of given numbers.');

export default () => {
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const question = `${num1} ${num2}`;
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i >= 1; i -= 1) {
    const isDivider = (num1 % i === 0) && (num2 % i === 0);
    if (isDivider) {
      return { question, correctAnswer: String(i) };
    }
  }

  return null;
};
