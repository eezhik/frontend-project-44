#!/usr/bin/env node

import * as common from '../src/index.js';

const name = common.greeting();
const digit = 10 ** common.level();
console.log('Find the greatest common divisor of given numbers.');
common.game('gcd', name, digit);