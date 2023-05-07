import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getTaskAndAnswer = () => {
  const taskAndAnswer = [];
  const number = getRandomNumber(2);
  taskAndAnswer.push(number);
  taskAndAnswer.push(getCorrectAnswer(number));
  return taskAndAnswer;
};

const playPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(getTaskAndAnswer, rule);
};

export default playPrime;
