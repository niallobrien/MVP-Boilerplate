'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean')

gulp.task('clean', ['clean-styles', 'clean-scripts']);

gulp.task('clean-styles', function () {
    return gulp.src('public/styles/*.css', {read: false})
        .pipe(clean());
});

gulp.task('clean-scripts', function () {
    return gulp.src('public/scripts/*.js', {read: false})
        .pipe(clean());
});