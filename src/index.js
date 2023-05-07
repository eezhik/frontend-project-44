import readlineSync from 'readline-sync';

export default (getTaskAndAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const rounds = 3;
  for (let i = 1; i <= rounds; i += 1) {
    const taskAndAnswer = getTaskAndAnswer();
    const question = taskAndAnswer[0];
    const correctAnswer = taskAndAnswer[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.trim().toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
