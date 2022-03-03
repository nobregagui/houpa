const fs = require('fs')

function logDB(req, res, next) {
    fs.appendFileSync('log.txt', '  Produto adicionado pela url: ' + req.url + '  ||  ' )
    next()
}

module.exports = logDB