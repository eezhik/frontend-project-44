#!/usr/bin/env node

import * as common from '../src/index.js'

const name = common.greeting();
const digit = 10 ** common.level();
console.log('What number is missing in the progression?');
common.game('progression', name, digit);