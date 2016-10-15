// Error: only one instance of babel-polyfill is allowed
// at Object.<anonymous> (/var/www/html/adeira/connector-frontend/node_modules/babel-polyfill/lib/index.js:10:9)

var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('default', function () {
	return gulp.src('index.html').pipe(vulcanize({
		abspath: '',
		excludes: [
			'\\.css$'
		],
		stripExcludes: [],
		inlineScripts: false,
		inlineCss: false,
		addedImports: [],
		redirects: [],
		implicitStrip: true,
		stripComments: false
	})).pipe(gulp.dest('dest'));
});
