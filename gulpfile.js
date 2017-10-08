var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    pug = require("gulp-pug"),
    stylus = require("gulp-stylus"),
    uglify = require("gulp-uglify");

gulp.task('styles', function() {
  gulp.src('src/styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('views', function() {
  gulp.src('src/views/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});
