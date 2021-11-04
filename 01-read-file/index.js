const fs = require('fs');
const path = require('path');

const text = path.join(__dirname, 'text.txt');

const readStrem = fs.createReadStream(text);

readStrem.on('data', (chunk) => {
  console.log(chunk.toString());
})







