import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const evaluateExpression = (number1, number2, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator '${mathOperator}!`);
  }
};

const getTaskAndAnswer = () => {
  const taskAndAnswer = [];
  const mathOperations = ['+', '-', '*'];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operatorIndex = getRandomNumber(0, mathOperations.length);
  taskAndAnswer.push(`${number1} ${mathOperations[operatorIndex]} ${number2}`);
  taskAndAnswer.push(`${evaluateExpression(number1, number2, mathOperations[operatorIndex])}`);
  return taskAndAnswer;
};

const playCalc = () => {
  const rule = 'What is the result of the expression?';
  runGame(getTaskAndAnswer, rule);
};

export default playCalc;
