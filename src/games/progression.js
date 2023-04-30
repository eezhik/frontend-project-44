import * as common from '../index.js';
import randomNumber from '../utils.js';

const conditions = () => {
  const arrConditions = [];
  const minCount = 5;
  const notZero = 1;
  const maxCount = 10;
  const count = randomNumber(minCount, maxCount);
  const step = randomNumber(notZero);
  const hidden = randomNumber(notZero, count);
  let termOfProgression = randomNumber();
  const arrProgression = [];
  let correctAnswer = termOfProgression;
  for (let i = 1; i <= count + 1; i += 1) {
    if (i === hidden) {
      correctAnswer = termOfProgression;
      arrProgression.push('..');
    } else {
      arrProgression.push(termOfProgression);
    }
    termOfProgression += step;
  }
  arrConditions.push(arrProgression.join(' '));
  arrConditions.push(`${correctAnswer}`);
  return arrConditions;
};

const playProgression = () => {
  const name = common.greeting();
  console.log('What number is missing in the progression?');
  common.gameProcess(conditions, name);
};

export default playProgression;
