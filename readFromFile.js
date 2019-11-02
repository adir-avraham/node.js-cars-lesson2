const fs = require('fs')

function readFromFile(file) {

    const result = fs.readFileSync(file, 'utf8')      

    return result;
}




module.exports.readFromFile = readFromFile;




