import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getArithmeticProgression = (firstTerm, step, count) => {
  const progression = [];
  for (let newTerm = firstTerm; progression.length < count; newTerm += step) {
    progression.push(newTerm);
  }
  return progression;
};

const getTaskAndAnswer = () => {
  const taskAndAnswer = [];
  const minCount = 5;
  const notZero = 1;
  const maxCount = 10;
  const firstTerm = getRandomNumber();
  const step = getRandomNumber(notZero);
  const count = getRandomNumber(minCount, maxCount);
  const progression = getArithmeticProgression(firstTerm, step, count);
  const hiddenIndex = getRandomNumber(notZero, count) - 1;
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  taskAndAnswer.push(progression.join(' '));
  taskAndAnswer.push(`${hiddenValue}`);
  return taskAndAnswer;
};

const playProgression = () => {
  const rule = 'What number is missing in the progression?';
  runGame(getTaskAndAnswer, rule);
};

export default playProgression;
