#!/usr/bin/env node
import * as common from '../src/index.js';

const prime = (arrConditions, digit) => {
    const number = 2 + Math.floor(Math.random() * digit);
    let correctAnswer = 'yes';
    
    let j = 2;
    const limit = Math.sqrt(number);
    while (j <= limit) {
        if (number % j == 0) {
            correctAnswer = 'no';
            break;
        }
        j +=1;
    }

    arrConditions.push(number);
    arrConditions.push(correctAnswer);
};

const name = common.greeting();
const digit = 10 ** common.level();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
common.game(prime, name, digit);
