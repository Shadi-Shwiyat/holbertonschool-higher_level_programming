#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w === undefined || h === undefined || w <= 0 || h <= 0) {
      // create empty object instance if any above conditions are met
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let row = 0;
    let column;

    while (row < this.height) {
      let rowString = '';
      column = 0;

      while (column < this.width) {
        rowString += 'X';
        column++;
      }
      console.log(rowString);
      row++;
    }
  }
}

module.exports = Rectangle;
