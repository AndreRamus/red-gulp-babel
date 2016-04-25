'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');

// paths
const input = 'src/index.js';
const output = 'dist';

// compile ES2015 -> ES5
gulp.task('babel', () => {
	return gulp.src(input)
		.pipe(babel())
		.pipe(gulp.dest(output));
});

// run compile on changes
gulp.task('watch', () => {
	gulp.watch(input);
});

// run watch & babel with the command 'gulp'
gulp.task('default', ['watch', 'babel']);
