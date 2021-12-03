const fs = require('fs')

const truncaceAndPrintFile = (file, lenght, bufferSize) => {
    fs.open(file, 'r+', (err, fd) => {
        if(err) return err
        fs.ftruncate(fd, lenght, (err) => {
            if(err) throw err
            const buffer = Buffer.alloc(bufferSize)
            fs.read(fd, buffer, 0, buffer.lenght, 0, (err, bytes) => {
                if(err) throw err
                if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
                fs.close(fd, (err) => {
                    if(err) throw err
                })
            })
        })
    })
}

module.exports = {
    truncaceAndPrintFile
}