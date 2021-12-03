
const { unlinkWrapper, renameWrapper, copyFileWrapper, statWrapper, chmodWrapper } = require('./utils')

/*unlinkWrapper({
    path: './fs/other-methods/szamar.txt',
  })*/

  /*renameWrapper({
      oldPath: './fs/other-methods/poets.txt',
      newPath: './fs/other-methods/POETS.txt',
  })*/

  /*copyFileWrapper({
    src: './fs/other-methods/POETS.txt',
    dest: './fs/other-methods/copy/POETS.txt',
})*/

/*statWrapper({
    path: './fs/other-methods/POETS.txt',
    callback(err, stats) {
        if(err) throw err
        console.log(stats)
    }
})*/

chmodWrapper({
    path: './fs/other-methods/POETS.txt',
    mode: 744
})
