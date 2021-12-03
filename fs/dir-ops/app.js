const {access, mkdir, writeFile, readdir} = require('fs').promises

const capitalizeFirstLetter = (str) =>

const createStarterTemplate = () => {
    access('views')
    .catch(()=> mkdir('views'))
    .then(() = writeFile('./views/index.html', 'INDEX'))
    .then(() = writeFile('./views/about.html', 'ABOUT'))
    .then(()=> readdir('views'))
    .then(console.log)
}