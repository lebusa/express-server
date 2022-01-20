const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Express web server')
})

app.listen(3000)