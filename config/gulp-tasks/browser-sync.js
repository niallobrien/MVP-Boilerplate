'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('./config')

gulp.task('browser-sync', ['nodemon'], function () {
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({
    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',
    online: true,
    xip: true,
    browser: ['google-chrome']
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

