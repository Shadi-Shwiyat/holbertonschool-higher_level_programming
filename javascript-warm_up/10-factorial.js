#!/usr/bin/node

function factorial (a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
}

const args = process.argv.slice(2);
const num1 = Number(args[0]);
let retVal;

if (args[0] === undefined || isNaN(num1)) {
  console.log('1');
} else {
  retVal = factorial(num1);
  console.log(retVal);
}
