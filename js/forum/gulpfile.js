var gulp = require('gulp');
//var ts = require('gulp-typescript');
var flarum = require('flarum-gulp');

var tsFiles = 'src/**/*.ts';
gulp.task('ts', function () {
	// return gulp.src(tsFiles)
	// 	.pipe(ts({
	// 		noImplicitAny: true,
	// 		out: 'main.js'
	// 	}))
	// 	.pipe(gulp.dest('built/local'));
});

// flarum depends on ts, the node_modules/flarum-gulp/index.js is changed accordingly
flarum({
  modules: {
    'fan/minimal': [
//      'built/local/**/*.js'
      'src/**/*.js'
    ]
  }
});

// Default Task
gulp.task('default', ['ts', 'flarum']);

//gulp.watch(tsFiles, ['flarum']);
gulp.watch('src/**/*.js', ['flarum']);
