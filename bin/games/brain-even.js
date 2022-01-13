#!/usr/bin/env node

import name from '../../src/cli.js';
import { initRandomNum, startGame } from '../../src/index.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const initQuestionAnswer = () => {
  const question = initRandomNum();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

startGame(initQuestionAnswer);
