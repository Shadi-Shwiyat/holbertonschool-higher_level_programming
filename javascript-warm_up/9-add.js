#!/usr/bin/node

function add (a, b) {
  const sum = (a + b);
  return (sum);
}

const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);
let retVal;

if (args[0] === undefined || args[1] === undefined || isNaN(num1, num2)) {
  console.log('NaN');
} else {
  retVal = add(num1, num2);
  console.log(retVal);
}
