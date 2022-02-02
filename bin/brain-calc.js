#!/usr/bin/env node
import name from '../src/cli.js';
import startGame from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-calc.js';

console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');
startGame(initQuestionAnswer);
