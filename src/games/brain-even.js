#!/usr/bin/env node

import name from '../cli.js';
import { initRandomNum, startGame } from '../index.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const initQuestionAnswer = () => {
  const question = initRandomNum();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

startGame(initQuestionAnswer);
