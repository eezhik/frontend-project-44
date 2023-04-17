#!/usr/bin/env node
import * as common from '../src/index.js';

const calc = (arrConditions, digit) => {

    const arrOper = [' + ', ' - ', ' * '];
    const number1 = Math.floor(Math.random() * digit);
    const numser2 = Math.floor(Math.random() * digit);
    const simbol = Math.floor(Math.random() * arrOper.length);
    let correctAnswer = 0;

    switch (simbol) {
        case 0:
            correctAnswer = number1 + numser2;
            break;
        case 1:
            correctAnswer = number1 - numser2;
            break;
        case 2:
            correctAnswer = number1 * numser2;
            break;
    }
    arrConditions.push(number1 + arrOper[simbol] + numser2);
    arrConditions.push(correctAnswer);
};

const name = common.greeting();
const digit = 10 ** common.level();
console.log('What is the result of the expression?');
common.game(calc, name, digit);
