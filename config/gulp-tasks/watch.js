'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('./config');

gulp.task('watch', function () {
    // watch for changes
    // gulp.watch([config.workfilesWatch], reload);
    gulp.watch(config.scssWatch, ['styles']);
    gulp.watch(config.jsWatch, ['scripts']);
//    gulp.watch(config.packageFile, ['wiredep']); Replace with browserify
});