const express = require('express')
const path = require('path')
const app = express()
const portnum = 3000

const proj_root = path.join(__dirname, '../')
console.log('Project root is set to ' + proj_root)


app.get('/', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/index.html'))
})
app.get('/favicon.png', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/favicon.png'))
})
app.use('/json', express.static(path.join(proj_root, 'server/json')))

app.listen(portnum)
console.log('server started at ' + portnum);