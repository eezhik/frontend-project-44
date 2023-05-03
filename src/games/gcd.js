import * as common from '../index.js';
import randomNumber from '../utils.js';

const getGCD = (number1, number2) => {
  let gcd = number1;
  let divisor = number2;
  while (divisor) {
    const help = divisor;
    divisor = gcd % divisor;
    gcd = help;
  }
  return gcd;
};

const getConditions = () => {
  const conditions = [];
  const number1 = randomNumber();
  const number2 = randomNumber();
  conditions.push(`${number1} ${number2}`);
  conditions.push(`${getGCD(number1, number2)}`);
  return conditions;
};

const playGcd = () => {
  const name = common.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  common.runGame(getConditions, name);
};

export default playGcd;
