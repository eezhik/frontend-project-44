import * as common from '../index.js';
import randomNumber from '../utils.js';

const isPrime = (number) => {
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getConditions = () => {
  const conditions = [];
  const number = randomNumber(2);
  conditions.push(number);
  conditions.push(getCorrectAnswer(number));
  return conditions;
};

const playPrime = () => {
  const name = common.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  common.runGame(getConditions, name);
};

export default playPrime;
