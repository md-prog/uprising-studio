const express = require('express')
const path = require('path')
const app = express()
const portnum = 3000

const proj_root = path.join(__dirname, '../')
console.log('Project root is set to ' + proj_root)

// frontend app files
app.use('/', express.static(path.join(proj_root, 'client')))

// node modules
app.use('/node_modules/pixi.js/bin/pixi.min.js', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/node_modules/pixi.js/bin/pixi.min.js'))
})
app.use('/node_modules/three/build/three.min.js', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/node_modules/three/build/three.min.js'))
})
app.use('/node_modules', express.static(path.join(proj_root, 'node_modules')))

// server mock API
app.use('/json', express.static(path.join(proj_root, 'server/json')))

// index.html for unknown routes
app.get('*', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/index.html'))
})

// start listening
app.listen(portnum)
console.log('server started at ' + portnum);