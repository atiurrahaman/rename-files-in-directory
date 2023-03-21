let fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, "") //path here in the quotes

const renameFile = async (filePath, existingName, newName) => {
  if (fs.existsSync(filePath + existingName)) {
    fs.rename(filePath + existingName, filePath + newName, function (err) {
      if (err) throw err;
      console.log('File Renamed!');
    });
  } else {
    console.log("file not found")
  }

}

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.log("unable to scan")
  } else {
    console.log({files})
    for (const file of files) {
      console.log({path: directoryPath+"/"+file, new: file.split("svg")[0]+"png"})
      await renameFile(directoryPath+"/", file, file.split("svg")[0]+"png")
    }
  }
})