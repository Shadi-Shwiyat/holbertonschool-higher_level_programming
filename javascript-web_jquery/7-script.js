#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/people/5/?format=json';

request.get(url, (err, response, body) => {
  if (err) {
    console.error('Failed to fetch api data', err)
  } else {
    const jsonData = JSON.parse(body);
    const name = jsonData.name;
    console.log(name);

    //$("#character").text(name);
  }
});
