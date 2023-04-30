import * as common from '../index.js';
import randomNumber from '../utils.js';

const conditions = () => {
  const arrConditions = [];
  const number = randomNumber();
  const isEven = number % 2 === 0;
  arrConditions.push(number);
  arrConditions.push(isEven ? 'yes' : 'no');
  return arrConditions;
};

const playEven = () => {
  const name = common.greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  common.gameProcess(conditions, name);
};

export default playEven;
