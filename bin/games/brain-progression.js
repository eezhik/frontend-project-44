#!/usr/bin/env node
import * as common from '../src/index.js';

const progression = (arrConditions, digit) => {
    const minCount = 5;
    const notZero = 1;
    const maxCount = 10;
    const count = minCount + Math.floor(Math.random() * maxCount);
    const step = notZero + Math.floor(Math.random() * digit);
    const hidden = notZero + Math.floor(Math.random()* count);
    let termOfProgression = Math.floor(Math.random() * digit);
    const arrProgression = [];
    let correctAnswer = termOfProgression;
    for (let i = 1; i <= count + 1; i += 1) {
        if (i == hidden) {
            correctAnswer = termOfProgression;
            arrProgression.push('..');
        } else {
            arrProgression.push(termOfProgression);
        }
        termOfProgression += step;
    }
    arrConditions.push(arrProgression.join(' '));
    arrConditions.push(correctAnswer);
};

const name = common.greeting();
const digit = 10 ** common.level();
console.log('What number is missing in the progression?');
common.gameProcess(progression, name, digit);
