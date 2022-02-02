#!/usr/bin/env node
import name from '../src/cli.js';
import startGame from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-even.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
startGame(initQuestionAnswer);
