#!/usr/bin/node

const request = require('request');

const args = process.argv.slice(2);
const url = args[0];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Failed to send request', error);
  } else {
    const jsonData = JSON.parse(body).results;
    const charID = 'https://swapi-api.hbtn.io/api/people/18/';
    let moviesPresent = 0;

    for (const movie in jsonData) {
      const charList = jsonData[movie].characters;
      for (const char in charList) {
        if (charList[char] === charID) {
          moviesPresent++;
        }
      }
    }
    console.log(moviesPresent);
  }
});
