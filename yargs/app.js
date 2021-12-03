const { access } = require('fs');
const { loadavg } = require('os');
const yargs = require('yargs')
const movies = require('./database/movie')

yargs
    .version('1.0.0')
    .usage('Usage')

