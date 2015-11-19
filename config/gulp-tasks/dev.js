'use strict'

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
	  // we'd need a slight delay to reload browsers
	  // connected to browser-sync after restarting nodemon
    BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    // nodemon our expressjs server
    script: 'config/server.js',
    // watch core server file(s) that require server restart on change
    watch: ['app/**/*.js']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('dev', ['scripts', 'styles', 'browser-sync'], function () {
  gulp.watch('app/assets/**/*.js', ['scripts', browserSync.reload]);
  gulp.watch('app/assets/**/*.scss', ['styles', browserSync.reload]);
  gulp.watch('app/**/*.jade', ['bs-reload']);
})
