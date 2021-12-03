const { writeFile, appendFile } = require('fs')
const { fileHandlerWrapper } = require('./utils')

fileHandlerWrapper({
    method: writeFile,
    path: './fs/basic-methods-refractor/szamar.txt',
    data: 'SZAMÁRMESE'
})
fileHandlerWrapper({
    method: appendFile,
    path: './fs/basic-methods-refractor/poets.txt',
    data: 'SZAMÁRMESE'
})