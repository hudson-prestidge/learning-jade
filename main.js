const pug = require('pug')
const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
// const bootstrap = require('bootstrap')

const app = express()

const PORT = 3000

app.set('view engine', 'pug')

// app.use('/css', express.static(path.join(__dirname, '/stylesheets')))

app.use('/css', sassMiddleware({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, '/stylesheets'),
  debug: true,
  outputStyle: 'expanded'
}));

app.get('/', function (req, res) {
  res.render('index', { title: 'Pug Templating', message: 'This is pug templating!'});
})

app.listen(PORT, function(){
  console.log('server is running and listening on port: ', PORT);
})
