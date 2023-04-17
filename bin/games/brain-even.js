#!/usr/bin/env node
import * as common from '../src/index.js';

const even = (arrConditions, digit) => {
    const number = Math.floor(Math.random() * digit);

    const even = number % 2 == 0;
    let correctAnswer = '';
    if (even) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    }
    arrConditions.push(number);
    arrConditions.push(correctAnswer);
};

const name = common.greeting();
const digit = 10 ** common.level();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
common.game(even, name, digit);
