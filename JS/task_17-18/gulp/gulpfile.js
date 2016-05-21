var gulp = require('gulp'),
		concat = require('gulp-concat'),
		rename = require("gulp-rename"),
		uglify = require('gulp-uglify');


	gulp.task('concat', function() {
		return gulp.src('src/js/*.js')
		.pipe(concat('built.js'))
		.pipe(gulp.dest('dist/js/'));
	});

	gulp.task('compress', ['concat'], function() {
  	return gulp.src('dist/js/*.js')
    .pipe(uglify())
     .pipe(rename('built.min.js'))
    .pipe(gulp.dest('dist/js/'));
	});

	gulp.task('default', ['compress'], function() {
  console.log("Yess!")
})