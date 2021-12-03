const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log('file changed')
}

const fileHandlerWrapper = ({ method, path, data, callback = fileHandlerCallback } = {}) => {
    method(path, data, callback)
}



module.exports = {
    fileHandlerWrapper
}