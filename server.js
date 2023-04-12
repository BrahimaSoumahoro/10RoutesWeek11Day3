const express = require('express');
const app = express();
const products = require('./products.json');
const fs = require('fs')
const http = require('http')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function (req, res) {
  res.render('index', { products });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
