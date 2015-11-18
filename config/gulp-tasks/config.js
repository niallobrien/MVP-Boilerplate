'use strict';

/**
 * Config file for Gulp tasks
 */

module.exports = {
    // Used for BrowserSync
    localUrl: 'localhost:3000',
    jsEntryFile: __base + 'app/assets/scripts/main.js',
    jsWatch: __base + 'app/assets/scripts/**/*.js', // what files to watch to trigger the scripts task
    jsDir: __base + 'public/scripts', // destination
    jsEs6: true,
    scssEntryFile: __base + 'app/assets/styles/main.scss',
    scssWatch: __base + 'app/assets/styles/**/*.scss', // what files to watch to trigger the styles task
    cssDir: __base + 'public/styles' // destination
}