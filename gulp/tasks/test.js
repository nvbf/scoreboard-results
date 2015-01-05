var gulp = require('gulp'),
  istanbul = require('gulp-istanbul'),
  mocha = require('gulp-mocha');

gulp.task('test', function(cb) {
  gulp.src(['src/js/**.js'])
    .pipe(istanbul.hookRequire())
    .pipe(istanbul({includeUntested: true}))
    .on('finish', function() {
      gulp.src(['./test/**.js', 'src/js/**.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
