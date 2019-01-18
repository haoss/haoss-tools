'use strict';

const gulp = require('gulp'),
  //gulpif = require('gulp-if'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  plugins = require('gulp-load-plugins')(),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename')
  ;

// Sass
gulp.task('scss', function () {
  return gulp.src('resources/test.com.ua/_scss/main.scss')
    .pipe(plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(sass({
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(plugins.sourcemaps.write("/"))
    .pipe(gulp.dest('content/css/'))
});

// Your "watch" task
gulp.task('watch', () => {
  global.watch = true;
  gulp.watch('resources/test.com.ua/_scss/**/*.scss', gulp.series('scss'));
});

// Default
gulp.task('default', gulp.parallel('watch'));