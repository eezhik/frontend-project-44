import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const getTaskAndAnswer = () => {
  const taskAndAnswer = [];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  taskAndAnswer.push(`${number1} ${number2}`);
  taskAndAnswer.push(`${getGCD(number1, number2)}`);
  return taskAndAnswer;
};

const playGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runGame(getTaskAndAnswer, rule);
};

export default playGcd;
