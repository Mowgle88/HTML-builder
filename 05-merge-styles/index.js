// node 05-merge-styles

const fs = require('fs');
const { stat } = require('fs');
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const projectFolder = path.join(__dirname, 'project-dist/bundle.css');




fs.readdir(stylesFolder, {withFileTypes: true}, (err, files) => {

  let array = [];
  console.log(array)

  // files = files.filter(file => file.isFile() && path.extname(file) === '.css');
  for (const file of files) {

    if(file.isFile() && path.extname(file.name) === '.css') {
      // console.log(file);
      let pathToFiles = path.join(stylesFolder, file.name);

      fs.readFile(pathToFiles, 'utf-8', (error, data) => {

        let arr = data;
        array.push(arr)


  
        // fs.writeFile(projectFolder, data, (error) => {
        //   error ? console.log(error) : null;
        // });
      
      });
    }
  }
})

// console.log(array)



// function bundleAssembly() {

//   fs.readdir(stylesFolder, {withFileTypes: true}, (err, files) => {

//     for (const file of files) {
  
//       if(file.isFile() && path.extname(file.name) === '.css') {
//         let pathToFiles = path.join(stylesFolder, file.name);
  
//         fs.readFile(pathToFiles, 'utf-8', (error, data) => {
//           console.log(data)
    
    
//           fs.writeFile(projectFolder, data, (error) => {
//             error ? console.log(error) : null;
//           });
        
//         });
//       }
//     }
//   })

// }

// bundleAssembly()


