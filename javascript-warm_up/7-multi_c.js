#!/usr/bin/node

const args = process.argv.slice(2);
const number = Number(args[0]);
let i = 0;

if (args[0] === undefined || isNaN(number)) {
  console.log('Missing number of occurrences');
} else {
  while (i < number) {
    console.log('C is fun');
    i++;
  }
}
