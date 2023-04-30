import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameProcess = (conditions, name) => {
  const rounds = 3;
  let i = 0;
  while (i < rounds) {
    const conditionsOfGame = conditions();
    const question = conditionsOfGame[0];
    const correctAnswer = conditionsOfGame[1];
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
