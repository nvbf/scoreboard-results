var express = require('express'),
  app = express(),
  WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('./webpack.config'),

server;

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:3000');
  });

server = app.listen(process.env.PORT || 3001, function() {
  console.log('Listening on port %d', server.address().port);
});
