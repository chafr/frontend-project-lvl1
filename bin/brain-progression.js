#!/usr/bin/env node
import name from '../src/cli.js';
import startGame from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-progression.js';

console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');
startGame(initQuestionAnswer);
