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

  rotate () {
    const tempValue;

    tempValue = this.height;
    this.height = this.width;
    this.width = tempValue;
  }

  double () {
    this.height *= 2;
    this.width *= 2;
  }
}

module.exports = Rectangle;
