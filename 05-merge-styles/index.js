// node 05-merge-styles

const fs = require('fs');
// const promis = fs.promises;
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const projectFolder = path.join(__dirname, 'project-dist/bundle.css');


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
      fs.writeFile(projectFolder, arr.join(''), (error) => {
        error ? console.log(error) : console.log('Recording completed');
      });
    }, 1000)
  } catch (err) {
    console.error(err);
  }
}

bundleAssembly()




// async function writeFileToArray() {
//   let array = [];
//   promis.readdir(stylesFolder, {withFileTypes: true}, (err, files) => {
//     for (const file of files) {
//       if(file.isFile() && path.extname(file.name) === '.css') {
//         let pathToFiles = path.join(stylesFolder, file.name);
//         await fs.readFile(pathToFiles, 'utf-8', (error, data) => {
//           array.push(data)
//         });
//       }
//     } 
//   })
//   return array;
// }

// async function writeArrayToBundle(a) {
//   try {
//     console.log(a);
//     await fs.writeFile(projectFolder, a.join(''), (error) => {
//       error ? console.log(error) : console.log('Recording completed');
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function bundleAssembly() {
//   try {
//     let arr = await writeFileToArray();
//     await writeArrayToBundle(arr);
//   } catch (err) {
//     console.error(err);
//   }
// }

// bundleAssembly()
