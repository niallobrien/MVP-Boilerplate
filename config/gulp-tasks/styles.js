'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	size = require('gulp-size'),
	notify = require('gulp-notify'),
	config = require('./config'),
	minifyCss = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
  gulp.src(config.scssEntryFile)
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.cssDir))
    .pipe(reload({stream:true}))
    .pipe(size())
    .pipe(notify('Sass compilation complete.'));
});