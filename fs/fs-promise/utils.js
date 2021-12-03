const fsp = require('fs').promises

const readFileWrapper = async (file, options) => {
    try{
        const result = await fsp.readFile(file, options)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

module.exports = readFileWrapper