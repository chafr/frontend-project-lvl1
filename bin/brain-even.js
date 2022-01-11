#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counterCorrectAnswer = 0;
const initNewQuestion = () => {
  const num = Math.floor(Math.random() * 10) + 1;
  console.log(`Question: ${num}`);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    counterCorrectAnswer += 1;
    if (counterCorrectAnswer < 3) {
      initNewQuestion();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
  }
};

initNewQuestion();
