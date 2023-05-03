import * as common from '../index.js';
import randomNumber from '../utils.js';

const evaluateExpression = (number1, number2, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Error! Did not find operator '${mathOperator}!`);
  }
};

const getConditions = () => {
  const conditions = [];
  const mathOperations = ['+', '-', '*'];
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operatorIndex = randomNumber(0, mathOperations.length);
  conditions.push(`${number1} ${mathOperations[operatorIndex]} ${number2}`);
  conditions.push(`${evaluateExpression(number1, number2, mathOperations[operatorIndex])}`);
  return conditions;
};

const playCalc = () => {
  const name = common.greeting();
  console.log('What is the result of the expression?');
  common.runGame(getConditions, name);
};

export default playCalc;
