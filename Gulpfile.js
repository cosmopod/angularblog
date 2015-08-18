/**
 * Created by paco on 18/8/15.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');
// Servidor web de desarrollo
gulp.task('server', function () {
    connect.server({
        root: './app',
        hostname: '192.168.10.10',
        port: 80,
        livereload: true,
        middleware: function (connect, opt) {
            return [historyApiFallback];
        }
    });
});

