#!/usr/bin/env node
import * as common from '../src/index.js';

const gcd = (arrConditions, digit) => {
    let number1 = Math.floor(Math.random() * digit);
    let number2 = Math.floor(Math.random() * digit);
    arrConditions.push(number1 + " " + number2); 
    while(number2) {
    let help = number2;
    number2 = number1 % number2;
    number1 = help;
    }
    const correctAnswer = number1;
    arrConditions.push(correctAnswer);
};

const name = common.greeting();
const digit = 10 ** common.level();
console.log('Find the greatest common divisor of given numbers.');
common.gameProcess(gcd, name, digit);
