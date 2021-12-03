const promise = require('bluebird')
const fs = promise.promisifyAll(require('fs'))

const truncaceAndPrintFile = async (file, lenght, bufferSize) => {
    const fd = await fs.openAsync(file, 'r+')
    await fs.ftruncateAsync(fd, lenght)
    const buffer = Buffer.alloc(bufferSize)
    const bytes = await fs.readAsync(fd, buffer, 0, buffer.length, 0)
    if(bytes > 0) console.log(buffer.slice(0, bytes).toString())
    await fs.closeAsync(fd)

}

module.exports = truncaceAndPrintFile
