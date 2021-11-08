// node 06-build-page

const fs = require('fs');
const promises = require('fs').promises;
const path = require('path');

const projectFolder = path.join(__dirname, 'project-dist');
const assets = path.join(__dirname, 'assets');
const assetsCopy = path.join(projectFolder, 'assets');
const stylesFolder = path.join(__dirname, 'styles');
const styleFile = path.join(projectFolder, 'style.css');

// const stylesFolder = path.join(__dirname, 'styles');

function createFolder() {
  fs.mkdir(projectFolder, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log(`Folder ${projectFolder} created`);
    }
  });
}
createFolder()


function copyFilesToFolder(dir, newDir) {

  fs.mkdir(newDir, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log(`Folder ${newDir} created`);
    }
  });

  fs.readdir(dir, {withFileTypes: true}, (err, files) => {

    files.forEach(file => {
      if(file.isDirectory()) {
        const innerFolder = path.join(dir, file.name);
        const innerFolderCopy = path.join(newDir, file.name);
        copyFilesToFolder(innerFolder, innerFolderCopy);
      } else {
        promises.copyFile(path.join(dir, file.name), path.join(newDir, file.name), err => {
          if(!err){
          console.log(file + " has been copied!");
          }
        });
      }
    });
  })

}
copyFilesToFolder(assets, assetsCopy);


async function writeFileToArray() {
  let array = [];
  fs.readdir(stylesFolder, {withFileTypes: true}, (err, files) => {
    for (const file of files) {
      if(file.isFile() && path.extname(file.name) === '.css') {
        let pathToFiles = path.join(stylesFolder, file.name); 
        fs.readFile(pathToFiles, 'utf-8', (error, data) => {
          array.push(data)
        });
      }
    } 
  })
  return array;
}

async function bundleAssembly() {
  try {
    let arr = await writeFileToArray();
    setTimeout(() => {
      fs.writeFile(styleFile, arr.join(''), (error) => {
        error ? console.log(error) : console.log('Recording completed');
      });
    }, 1000)
  } catch (err) {
    console.error(err);
  }
}

bundleAssembly()

