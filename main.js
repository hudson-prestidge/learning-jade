const pug = require('pug')
const express = require('express')

const app = express()

const PORT = 3000

app.set('view engine', 'pug')

app.listen(PORT, function(){
  console.log('server is running and listening on port: ', PORT);
})
