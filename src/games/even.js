import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getTaskAndAnswer = () => {
  const taskAndAnswer = [];
  const number = getRandomNumber();
  taskAndAnswer.push(number);
  taskAndAnswer.push(getCorrectAnswer(number));
  return taskAndAnswer;
};

const playEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(getTaskAndAnswer, rule);
};

export default playEven;
