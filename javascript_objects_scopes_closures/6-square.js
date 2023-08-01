#!/usr/bin/node

const extSquare = require('./5-square');

class Square extends extSquare {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }

    let row = 0;
    let column;

    while (row < this.size) {
      let rowString = '';
      column = 0;
      while (column < this.size) {
        rowString += c;
        column++;
      }
      console.log(rowString);
      row++;
    }
  }
}

module.exports = Square;
