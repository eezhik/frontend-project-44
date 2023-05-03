import * as common from '../index.js';
import randomNumber from '../utils.js';

const getArithmeticProgression = (firstTerm, step, count) => {
  const progression = [];
  let newTerm = firstTerm;
  for (let i = 0; i <= count; i += 1) {
    progression.push(newTerm);
    newTerm += step;
  }
  return progression;
};

const getConditions = () => {
  const conditions = [];
  const minCount = 5;
  const notZero = 1;
  const maxCount = 10;
  const firstTerm = randomNumber();
  const step = randomNumber(notZero);
  const count = randomNumber(minCount, maxCount);
  const progression = getArithmeticProgression(firstTerm, step, count);
  const hiddenTermNumber = randomNumber(notZero, count) - 1;
  const hiddenTerm = progression[hiddenTermNumber];
  progression[hiddenTermNumber] = '..';
  conditions.push(progression.join(' '));
  conditions.push(`${hiddenTerm}`);
  return conditions;
};

const playProgression = () => {
  const name = common.greeting();
  console.log('What number is missing in the progression?');
  common.runGame(getConditions, name);
};

export default playProgression;
