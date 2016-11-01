var gulp = require('gulp')
  , sass = require('gulp-sass')
  , rename = require('gulp-rename')
  , livereload = require('gulp-livereload')
  , gulpHelp = require('gulp-help');

gulp = gulpHelp(gulp);

var paths = {
  scss: 'style/scss/**/*.scss',
  scssMain: 'style/scss/main.scss',
  css: 'style/css'
};

gulp.task('build-scss', 'builds the css un-minified', function() {
  return gulp.src(paths.scssMain)
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest(paths.css))
    .pipe(livereload())
    .resume();
});


gulp.task('watch', 'watch all scss and compile changes with livereload', function() {
  livereload.listen();
  gulp.watch(paths.scss, ['build-scss'])
});