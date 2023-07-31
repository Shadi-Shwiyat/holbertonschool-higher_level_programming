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
}

module.exports = Rectangle;
