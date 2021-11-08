// node 03-files-in-folder

const { readdir } = require('fs').promises;
const { stat } = require('fs');

const path = require('path');

const text = path.join(__dirname, 'secret-folder');

(async function (folder) {
  try {
    const files = await readdir(folder, {withFileTypes: true});
    for (const file of files) {

      let absolutePath = path.join(text, file.name);
      let basename = path.basename(file.name).replace(/\.\w*$/,'');
      let extension = path.extname(file.name).substring(1);
      
      stat(absolutePath, (err, stats) => {
        if(stats.isFile()) {
          console.log(`${basename} - ${extension} - ${stats.size}kb`);
        }
      });

    }
  } catch (err) {
    console.error(err);
  }
})(text)

