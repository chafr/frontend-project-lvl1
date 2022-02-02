import initRandomNum from '../init-random-num.js';

const makeProgression = (num1, num2) => {
  const difference = num1 - num2;
  const progression = [num1, num2];
  const lastIndexProgression = 9;
  for (let i = progression.length - 1; i < lastIndexProgression; i += 1) {
    const lastNum = progression[i];
    const newNum = lastNum - difference;
    progression.push(newNum);
  }

  return progression;
};

export default () => {
  const num1 = initRandomNum();
  const num2 = initRandomNum();
  const progression = makeProgression(num1, num2);
  const progressionLength = progression.length;
  const indexHiddenItem = initRandomNum(0, progressionLength);
  const hiddenItem = progression[indexHiddenItem];
  progression[indexHiddenItem] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(hiddenItem);
  return { question, correctAnswer };
};
