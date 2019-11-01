const fs = require('fs');

function writeToFile(file, data, url) {

    fs.appendFile(file, `${data} ${url}\n`, function (err){
        if (err) {
            console.log(err.message)
        }
    })

} 

module.exports.writeToFile = writeToFile;






