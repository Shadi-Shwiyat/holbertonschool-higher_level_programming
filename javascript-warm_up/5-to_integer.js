#!/usr/bin/node

const args = process.argv.slice(2);
let number;

if (args[0] === undefined) {
  console.log('Not a number');
} else {
  number = Number(args[0]);
  if (!isNaN(number)) {
    if (Number.isInteger(number)) {
      console.log('My number:', number);
    } else {
      console.log('My number:', number);
    }
  } else {
    console.log('Not a number');
  }
}
