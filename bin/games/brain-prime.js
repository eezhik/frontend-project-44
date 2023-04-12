#!/usr/bin/env node

import * as common from '../src/index.js';

const name = common.greeting();
const digit = 10 ** common.level();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
common.game('prime', name, digit);