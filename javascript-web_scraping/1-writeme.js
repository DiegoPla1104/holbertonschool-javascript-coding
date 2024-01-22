#!/usr/bin/node
const fs = require('fs');

const filename = process.argv[2];
const text = process.argv[3];


fs.writeFile(filename, text, 'utf-8', (writeErr) => {
  if (writeErr) {
    console.error('Error writing to the file:', writeErr);
  }
});
