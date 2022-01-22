#!/usr/bin/env node

import name from '../cli.js';
import { initRandomNum, startGame } from '../index.js';

console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');

const initQuestionAnswer = () => {
  const initAdding = () => {
    const num1 = initRandomNum();
    const num2 = initRandomNum();
    const question = `${num1} + ${num2}`;
    const correctAnswer = String(num1 + num2);
    return { question, correctAnswer };
  };

  const initSubtracting = () => {
    const num1 = initRandomNum();
    const num2 = initRandomNum();
    const question = `${num1} - ${num2}`;
    const correctAnswer = String(num1 - num2);
    return { question, correctAnswer };
  };

  const initMultiplication = () => {
    const num1 = initRandomNum();
    const num2 = initRandomNum();
    const question = `${num1} * ${num2}`;
    const correctAnswer = String(num1 * num2);
    return { question, correctAnswer };
  };

  const operations = [initAdding, initSubtracting, initMultiplication];
  return operations[Math.floor(Math.random() * operations.length)]();
};

startGame(initQuestionAnswer);
