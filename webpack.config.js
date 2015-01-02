module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/js/components/App.jsx']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // Pass *.jsx files through jsx-loader transform
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  }
};