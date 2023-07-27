#!/usr/bin/node

const args = process.argv.slice(2);
const number = Number(args[0]);
let row = 0;
let column;

if (args[0] === undefined || isNaN(number)) {
  console.log('Missing size');
} else {
  while (row < number) {
    let rowString = '';
    column = 0;
    while (column < number) {
      rowString += 'X';
      column++;
    }
    console.log(rowString);
    row++;
  }
}
