var gulp = require("gulp");
var gwebpack = require('gulp-webpack');

gulp.task("webpack", ['clean'], function() {
  return gulp.src('src/js/components/App.js')
    .pipe(gwebpack(
      require('./../../webpack.config')
    ))
    .pipe(gulp.dest('public/'));
});