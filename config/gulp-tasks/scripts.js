'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var assign = require('lodash.assign');
var config = require(__dirname + '/config');

var customOpts = {
  entries: config.jsEntryFile,
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
if (config.jsEs6) {
  b.transform(babelify);
}

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.jsDir))
    .pipe(reload({stream:true}))
    .pipe(notify('JS compilation complete.'));
}

gulp.task('scripts', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal
