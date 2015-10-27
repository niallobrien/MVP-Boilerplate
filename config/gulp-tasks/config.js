'use strict';

/**
 * Config file for Gulp tasks
 */

module.exports = {
    // Used for BrowserSync
    localUrl: 'boilerplate.dev',

    //  workfiles_watch: '**/*.php', // ExpressionEngine files
    jsEntryFile: __base + 'app/assets/scripts/main.js', // why is the dot there? I don't know, but it works
    jsDir: __base + 'app/assets/scripts/', // where your scripts are located
    jsWatch: [__base + 'app/assets/scripts/modules/**/*.js', __base + 'app/assets/scripts/main.js'], // what files to watch to trigger the scripts task
    jsEs6: true,

    scssEntryFile: __base + 'app/assets/styles/main.scss',
    scssWatch: __base + 'app/assets/styles/**/*.scss', // what files to watch to trigger the styles task
    cssDir: __base + 'app/assets/css',
    cssEntryFile: __base + 'app/assets/css/main.css',

    packageFile: __base + 'app/package'

    //  critical_css: 'critical.php', // will contain critical css that you can include
}