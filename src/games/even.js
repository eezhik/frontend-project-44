import * as common from '../index.js';

const conditions = (arrConditions, digit) => {
  const number = Math.floor(Math.random() * digit);
  const isEven = number % 2 === 0;
  let correctAnswer = '';
  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  arrConditions.push(number);
  arrConditions.push(correctAnswer);
};

const playEven = () => {
  const name = common.greeting();
  const digit = 10 ** 2;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  common.gameProcess(conditions, name, digit);
};

export default playEven;
