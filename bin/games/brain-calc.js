#!/usr/bin/env node
import * as common from '../src/index.js'

const name = common.greeting();

const digit = Math.pow(10, common.level());

console.log('What is the result of the expression?');

common.game('calc', name, digit)