const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

if(process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
  })
}

const port = process.env.PORT

app.listen(port, () => console.log('Listening on port ' + port))
