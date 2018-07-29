const fs = require('fs');
const path = require('path');
const data = require('../data');
const html = require('./html/htmlGenerator');

let output = process.argv.slice(2)[0];
const target = path.join(__dirname, '..', 'docs', 'index.html');

if (output) {
  output = output.toLowerCase();
}
if (output === 'html') {  
  const content = html(data);
  console.log(content);
  // fs.writeFile(target, content, (err, file) => {
  //   if(err) {
  //     console.error(err);
  //     return false;
  //   }
  //   console.log(file);
  //   return true;
  // });
} else if (output === 'pdf') {

} else {

}