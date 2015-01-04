var hot = !(process.env.ENV === 'production');

module.exports = {
  hot: hot,
  entry: {
    app: ['webpack/hot/dev-server', './src/js/components/App.js']
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.(eot|woff|svg|ttf)$/, loader: 'file'}
    ]
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  }
};