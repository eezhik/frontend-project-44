import * as common from '../index.js';

const conditions = (arrConditions, digit) => {
  let number1 = Math.floor(Math.random() * digit);
  let number2 = Math.floor(Math.random() * digit);
  arrConditions.push(`${number1} ${number2}`);
  while(number2) {
    let help = number2;
    number2 = number1 % number2;
    number1 = help;
  }
  const correctAnswer = number1;
  arrConditions.push(`${correctAnswer}`);
};

export const playGcd = () => {
  const name = common.greeting();
  const digit = 10 ** common.getLevel();
  console.log('Find the greatest common divisor of given numbers.');
  common.gameProcess(conditions, name, digit);
};
