'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');


gulp.task('concat', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['env']
      }))
    .pipe(concat('index_1.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
 
gulp.task('concatCss', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(concatCss("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('copy', 
  function () {
    return gulp.src(
      'src/index.html'
    )
    .pipe(
      gulp.dest(
          'build/'
    ));
});

gulp.task(
  'default', 
  ['copy', 'concat', 'concatCss']
);



