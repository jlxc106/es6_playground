import * as math from './math.js';
import $ from 'jquery';

const num1 = 5;
const num2 = 10;
const zero = 0;

console.log(`The total of ${num1} and ${num2} is ${math.add(num1, num2)}`);
console.log(`Divide by zero result: ${math.divide(num1, zero)}`);
console.log(`Multiply ${num1} and ${num2}: ${math.multiply(num1, num2)}`);


$('#root').append('<h1>I am Helping</h1>');

