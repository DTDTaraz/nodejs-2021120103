const { readFileSyncLog, readFileLog } = require('./utils')

readFileSyncLog('./fs/read-file-methods/szamar.txt', {encoding: 'utf-8'})

readFileLog('./fs/read-file-methods/szamar.txt', {encoding: 'utf-8'})

