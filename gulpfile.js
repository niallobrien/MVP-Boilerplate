'use strict'

global.__base = __dirname + '/';

/**
 * Pull in tasks
 */

var requireDir = require('require-dir')

requireDir(__dirname + '/config/gulp-tasks')