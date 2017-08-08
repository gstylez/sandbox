'use strict';

// Gulp.js configuration

// modules
const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(pug({
    pretty: true // Comment this to get minified HTML
  }))
  .pipe(gulp.dest('html'));
});
