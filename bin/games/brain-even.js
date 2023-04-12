#!/usr/bin/env node
import * as common from '../src/index.js'


const name = common.greeting();
const digit = 10 ** common.level();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
common.game('even', name, digit);