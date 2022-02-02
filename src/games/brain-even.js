import initRandomNum from '../init-random-num.js';

export default () => {
  const question = initRandomNum();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};
