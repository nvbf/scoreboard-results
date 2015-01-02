module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/js/components/App.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  }
};