// node 02-files-in-folder

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const text = path.join(__dirname, 'someFile.txt');


// =================================================

let createFile = function () {
  fs.writeFile(text, "Leave a review\n", function(err){
    if (err) {
        console.log(err);
      } else {
        console.log("File created");
    }
  });
}

let recursiveReadLine = function () {
  rl.question('What do you think about me?\n', function (answer) {
    if (answer == 'exit') {
      console.log('bye Bye');
      return rl.close();
    }

    fs.appendFile(text, `${answer}\n`, function(err){
      if (err) {
          console.log(err);
      }
    })

    console.log('Your feedback: "', answer, '"');
    recursiveReadLine();
  });
};

createFile()
setTimeout(recursiveReadLine, 1000)


// fs.unlink(text, function(err){
//   if (err) {
//       console.log(err);
//   } else {
//       console.log("File deleted");
//   }
// });