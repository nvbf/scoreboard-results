var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack-dev-server", function(callback) {
  console.log("Starting WebpackDevServer");
  // Start a webpack-dev-server
  var compiler = webpack(
    require('./../../webpack.config')
  );

  new WebpackDevServer(compiler, {
  }).listen(8080, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      // Server listening
      gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

      // keep the server alive or continue?
      // callback();
    });
});