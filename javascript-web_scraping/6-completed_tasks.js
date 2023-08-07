#!/usr/bin/node

const request = require('request');

const args = process.argv.slice(2);
const url = args[0];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Failed to send request', error);
  } else {
    try {
      const jsonData = JSON.parse(body);
      const tasksByUser = {};

      for (const task of jsonData) {
        const userId = task.userId;
        if (task.completed === true) {
          if (tasksByUser[userId]) {
            tasksByUser[userId]++;
          } else {
            tasksByUser[userId] = 1;
          }
        }
      }

      console.log(tasksByUser);
    } catch (e) {
      console.error('Failed to parse JSON', e);
    }
  }
});
