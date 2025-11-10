const fs = require('fs').promises;

fs.readFile('veer.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

fs.appendFile('veer.txt','hello guys','utf8')
.then(()=>{console.log("Data Appended Succesfully")})
.catch((err)=>{console.log("Error Appending data :",err)})


fs.writeFile('veer2.txt','hello world','utf8')
.then(()=>{console.log('File Created Succesfully')})
.catch((err1)=>{console.log('Error Writing Files :',err1)});
 
const dlt='veer4.txt';
fs.unlink(dlt)
.then(()=>console.log("File Deleted scuccesfully"))
.catch((err3)=>{console.log("Error deleting file: ",err3)});