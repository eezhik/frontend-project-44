import * as common from '../index.js';

const conditions = (arrConditions, digit) => {
  const arrMathOperations = ['+', '-', '*'];
  const number1 = Math.floor(Math.random() * digit);
  const number2 = Math.floor(Math.random() * digit);
  const simbol = Math.floor(Math.random() * arrMathOperations.length);
  let correctAnswer = 0;
  switch (simbol) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = number1 + number2;
  }
  arrConditions.push(`${number1} ${arrMathOperations[simbol]} ${number2}`);
  arrConditions.push(`${correctAnswer}`);
};

const playCalc = () => {
  const name = common.greeting();
  const digit = 10 ** common.getLevel();
  console.log('What is the result of the expression?');
  common.gameProcess(conditions, name, digit);
};

export default playCalc;
