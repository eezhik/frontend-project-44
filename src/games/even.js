import * as common from '../index.js';
import randomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getConditions = () => {
  const conditions = [];
  const number = randomNumber();
  conditions.push(number);
  conditions.push(getCorrectAnswer(number));
  return conditions;
};

const playEven = () => {
  const name = common.greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  common.runGame(getConditions, name);
};

export default playEven;
