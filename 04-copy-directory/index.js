// node 04-copy-directory

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'files');
const dirCopy = path.join(__dirname, 'files-copy')


function copyFilesToFolder() {
// в node.js v12 поменять на mkdir
// в node.js v16 поменять на rm
  fs.rm(dirCopy, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Folder created");
    }
  });

  fs.readdir(dir, (err, files) => {

    files.forEach(file => {
      fs.copyFile(path.join(dir, file), path.join(dirCopy, file), err => {
        if(!err){
        console.log(file + " has been copied!");
        }
      });
    });
  })

}

copyFilesToFolder()

