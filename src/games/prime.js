import * as common from '../index.js';
import randomNumber from '../utils.js';

const getCorrectAnswer = (number) => {
  let j = 2;
  const limit = Math.sqrt(number);
  while (j <= limit) {
    if (number % j === 0) {
      return 'no';
    }
    j += 1;
  }
  return 'yes';
};

const conditions = () => {
  const arrConditions = [];
  const number = randomNumber(2);
  arrConditions.push(number);
  arrConditions.push(getCorrectAnswer(number));
  return arrConditions;
};

const playPrime = () => {
  const name = common.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  common.gameProcess(conditions, name);
};

export default playPrime;
