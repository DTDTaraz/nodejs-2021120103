const os = require('os')

console.log('Platform: ',os.platform())
console.log('Arch.: ',os.arch())
console.log('OS v.: ',os.version())
console.log('OS build: ',os.release())
console.log('Processor: ',os.cpus()[0].model)
console.log('Total memory s.: ',(os.totalmem() / 1024 /1024 / 1024).toFixed(2), 'GB')
console.log('Free memory s.: ',(os.freemem() / 1024 /1024 / 1024).toFixed(2), 'GB')
console.log('User: ',os.userInfo().username)
console.log('IP adress: ',os.networkInterfaces())

