#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Failed to send request', error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error writing to file', err);
      }
    });
  }
});
