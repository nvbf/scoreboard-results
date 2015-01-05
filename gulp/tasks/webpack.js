var gulp = require("gulp");
var gwebpack = require('gulp-webpack');
var fs = require('fs');
var utils = require('istanbul').utils;

gulp.task("webpack", ['clean'], function(cb) {

  utils.copyFile('index.html', 'public/index.html');

  gulp.src('src/js/components/App.js')
    .pipe(gwebpack(
      require('./../../webpack.config'), null, cb
    ))
    .pipe(gulp.dest('public/'));
});