var gulp = require('gulp'),
		concat = require('gulp-concat'),
		rename = require("gulp-rename"),
		uglify = require('gulp-uglify'),
		uglifycss = require('gulp-uglifycss');


	gulp.task('concatJS', function() {
		return gulp.src('src/js/*.js')
		.pipe(concat('built.js'))
		.pipe(gulp.dest('dist/js/'));
	});

	gulp.task('concatCSS', function() {
		return gulp.src('src/css/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css/'));
	});

	gulp.task('compress', ['concatJS'], function() {
  	return gulp.src('dist/js/*.js')
    .pipe(uglify())
     .pipe(rename('built.min.js'))
    .pipe(gulp.dest('dist/js/'));
	});

	gulp.task('conmpressCSS', ['concatCSS'], function () {
	gulp.src('src/css/*.css')
	.pipe(uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	}))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest('dist/css/'));
});

	gulp.task('default', ['compress', 'conmpressCSS'], function() {
  console.log("Yess!")
})