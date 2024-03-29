#!/usr/bin/node

const fs = require('fs');

const args = process.argv.slice(2);
const filePath = args[0];
const string = args[1];

fs.writeFile(filePath, string, 'utf8', (err, data) => {
  if (err) {
    console.error('Error writing to file', err);
  }
});
