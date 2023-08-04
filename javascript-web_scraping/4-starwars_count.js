#!/usr/bin/node

const request = require('request');

const args = process.argv.slice(2);
const url = args[0];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Failed to send request', error);
  } else {
    const jsonData = JSON.parse(body);
    const charID = 'https://swapi-api.hbtn.io/api/people/18/';
    let moviesPresent = 0;

    for (const movie of jsonData.results) {
      for (const characterUrl of movie.characters) {
        if (characterUrl === charID) {
          moviesPresent++;
        }
      }
    }
    console.log(moviesPresent);
  }
});
