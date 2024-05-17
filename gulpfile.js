const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const webserver = require('gulp-webserver');

// Sass 컴파일 태스크 정의
gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// HTML 인클루드 태스크 정의
gulp.task('fileinclude', function() {
  return gulp.src('./src/**/*.html')
    .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
    .pipe(gulp.dest('./dist/html'));
});

// 파일 변경 감지 태스크 정의
gulp.task('watch', function() {
    // HTML 파일 변경 감지 및 자동 새로고침
    gulp.watch('./src/**/*.html', gulp.series('fileinclude'));

    // Sass 파일 변경 감지 및 자동 새로고침
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

// gulp 서버
gulp.task('webserver', function() {
    return gulp.src('./dist')
    .pipe(webserver({
        livereload: true,
        open: true,
        port: 8888
    }))
    .on('error', function(err) {
        console.error('webserver 작업에서 오류 발생:', err);
    });
});

// 기본 태스크 정의
gulp.task('default', gulp.series('sass', 'fileinclude', 'webserver', 'watch'));
