#!/usr/bin/node
const axios = require('axios');
const url = process.argv[2];

axios.get(url)
  .then(response => {
    const jsonResponse = response.data;
    const tasksdict = {};

    for (let i = 0; i < jsonResponse.length; i++) {
      const task = jsonResponse[i].completed;
      const userid = jsonResponse[i].userId;
      if (task === true) {
        tasksdict[userid] = (tasksdict[userid] || 0) + 1;
      }
    }
    console.log(tasksdict);
  })
  .catch(error => {
    console.error(error);
  });
