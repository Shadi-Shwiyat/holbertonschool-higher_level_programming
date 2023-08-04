#!/usr/bin/node

const request = require('request');

const args = process.argv.slice(2);
const id = args[0];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Failed to send request', error);
  } else {
    const jsonData = JSON.parse(body);
    const title = jsonData.title;
    console.log(title);
  }
});
