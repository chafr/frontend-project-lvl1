#!/usr/bin/env node

import name from '../cli.js';
import { initRandomNum, startGame } from '../index.js';

console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');

const makeProgression = (num1, num2) => {
  const difference = num1 - num2;
  const progression = [num1, num2];
  for (let i = progression.length - 1; i < 9; i += 1) {
    const lastNum = progression[i];
    const newNum = lastNum - difference;
    progression.push(newNum);
  }

  return progression;
};

const initQuestionAnswer = () => {
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const progression = makeProgression(num1, num2);
  const indexHiddenItem = initRandomNum(0, 10);
  const hiddenItem = progression[indexHiddenItem];
  progression[indexHiddenItem] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(hiddenItem);
  return { question, correctAnswer };
};

startGame(initQuestionAnswer);
