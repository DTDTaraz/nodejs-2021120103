const {resolve, join} = require('path')

console.log(resolve())
console.log(join())
console.log(__dirname)

console.log(resolve('./fs/path-resolve-join-dirname/szamar.txt'))
console.log(join(__dirname, './fs/path-resolve-join-dirname/szamar.txt'))