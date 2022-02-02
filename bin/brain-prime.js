#!/usr/bin/env node
import name from '../src/cli.js';
import startGame from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-prime.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
startGame(initQuestionAnswer);
