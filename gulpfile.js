const {src, dest, series, parallel} = require('gulp');
const jsmin = require("gulp-jsmin");
const del = require('del');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

// This task is supposed to clean things

// This task is supposed to clean things

function cleanTask() {
  return del('dist');
}

function pagesTask() {
  return src('src/index.html')
    .pipe(dest('dist'))
}

function scriptsTask() {
  return src('src/scripts/**/*.js')
    .pipe(jsmin())
    .pipe(dest('dist/js'));
}

function stylesTask() {
  return src('src/styles/**/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css'))
}

function imagesTask() {
  return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.default = series(cleanTask, parallel(pagesTask,imagesTask, scriptsTask, stylesTask));
