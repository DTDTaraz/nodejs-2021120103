const {createReadStream} = require('fs')

const readableStream = createReadStream('./fs/readable-stream/szamar.txt', {
    encoding: 'utf8',
    highWaterMark: 11
})

readableStream.on('data', (chunck) => {
    process.stdout.write(chunck)
})