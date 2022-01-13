#!/usr/bin/env node

import name from '../../src/cli.js';
import { initRandomNum, startGame } from '../../src/index.js';

console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');

const initQuestionAnswer = () => {
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const difference = num1 - num2;
  const progression = [num1, num2];
  for (let i = progression.length - 1; i < 9; i += 1) {
    const lastNum = progression[i];
    const newNum = lastNum - difference;
    progression.push(newNum);
  }

  const indexHiddenItem = initRandomNum(0, 10);
  const hiddenItem = progression[indexHiddenItem];
  progression[indexHiddenItem] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(hiddenItem);
  return { question, correctAnswer };
};

startGame(initQuestionAnswer);
