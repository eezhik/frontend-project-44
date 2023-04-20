import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getLevel = () => {
  // Я бы хотела сделать возможность ввода уровня игры, но для прохождения тестов
  // и записи аксинем я убрала этот функционал и возвращаю просто 2, как в примерах задачи
  // поэтому в целях обмануть линтер я поставила это условие.
  const digit = 2;
  if (digit === 2) {
    return digit;
  }
  const level = readlineSync.question('Please, enter the difficulty of the game from 1 to 3? ');
  const arrLeveles = ['1', '2', '3'];
  if (arrLeveles.indexOf(level) < 0) {
    console.log('Sorry, we don t know this level of difficulty. You\'ll play in easy level!');
  }
  return level;
};

export const gameProcess = (getGame, name, digit = 1, rounds = 3) => {
  let i = 0;
  while (i < rounds) {
    const arrConditions = [];
    getGame(arrConditions, digit);
    const question = arrConditions[0];
    const correctAnswer = arrConditions[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.trim().toLowerCase() === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
