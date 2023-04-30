import * as common from '../index.js';
import randomNumber from '../utils.js';

const conditions = () => {
  const arrConditions = [];
  let number1 = randomNumber();
  let number2 = randomNumber();
  arrConditions.push(`${number1} ${number2}`);
  while (number2) {
    const help = number2;
    number2 = number1 % number2;
    number1 = help;
  }
  arrConditions.push(`${number1}`);
  return arrConditions;
};

const playGcd = () => {
  const name = common.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  common.gameProcess(conditions, name);
};

export default playGcd;
