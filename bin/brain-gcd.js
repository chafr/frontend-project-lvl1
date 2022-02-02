#!/usr/bin/env node
import name from '../src/cli.js';
import startGame from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-gcd.js';

console.log(`Hello, ${name}`);
console.log('Find the greatest common divisor of given numbers.');
startGame(initQuestionAnswer);
