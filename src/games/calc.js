import * as common from '../index.js';
import randomNumber from '../utils.js';

const getCorrectAnswer = (number1, number2, simbol) => {
  switch (simbol) {
    case 0:
      return number1 + number2;
    case 1:
      return number1 - number2;
    case 2:
      return number1 * number2;
    default:
      throw new Error('Error! Do not find operator!');
  }
};

const conditions = () => {
  const arrConditions = [];
  const arrMathOperations = ['+', '-', '*'];
  const number1 = randomNumber();
  const number2 = randomNumber();
  const simbol = randomNumber(0, arrMathOperations.length);
  arrConditions.push(`${number1} ${arrMathOperations[simbol]} ${number2}`);
  arrConditions.push(`${getCorrectAnswer(number1, number2, simbol)}`);
  return arrConditions;
};

const playCalc = () => {
  const name = common.greeting();
  console.log('What is the result of the expression?');
  common.gameProcess(conditions, name);
};

export default playCalc;
