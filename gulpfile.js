const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// 경로 설정
const paths = {
  styles: {
    src: './src/asset/scss/**/*.scss',
    dest: './dist/asset/css'
  },
  scripts: {
    src: './src/asset/js/**/*.js',
    dest: './dist/asset/js'
  },
  html: {
    src: './src/**/*.html',
    dest: './dist'
  },
  images: {
    src: './src/asset/img/**/*.{jpg,png,svg,gif,ico,webp}"',
    dest: './dist/asset/img'
  },
  fonts: {
    src: './src/asset/fonts/**/*',
    dest: './dist/asset/fonts'
  }
};

// 이미지 최적화 태스크 정의
// gulp.task('images', function() {
//   return import('gulp-imagemin').then(({ default: imagemin }) => {
//     return gulp.src(paths.images.src)
//       .pipe(imagemin())
//       .pipe(gulp.dest(paths.images.dest));
//   });
// });

// 이미지 최적화 태스크 정의
gulp.task('images', function() {
  return import('gulp-imagemin').then(({ default: imagemin }) => {
    return gulp.src(paths.images.src)
      .pipe(imagemin())
      .pipe(gulp.dest(paths.images.dest));
  });
});



// Sass 컴파일 태스크 정의
gulp.task('sass', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
});

// HTML 인클루드 태스크 정의
gulp.task('fileinclude', function() {
  return gulp.src(paths.html.src)
    .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
    .pipe(gulp.dest(paths.html.dest));
});

// 파일 변경 감지 태스크 정의
gulp.task('watch', function() {
  gulp.watch(paths.html.src, gulp.series('fileinclude'));
  gulp.watch(paths.styles.src, gulp.series('sass'));
  gulp.watch(paths.scripts.src, gulp.series('scripts'));
  gulp.watch(paths.images.src, gulp.series('images'));
  gulp.watch(paths.fonts.src, gulp.series('fonts'));
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

// Fonts 이동 태스크 정의
gulp.task('fonts', function() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
});

// 기본 태스크 정의
gulp.task('default', gulp.series('sass', 'scripts', 'fileinclude', 'images', 'fonts', gulp.parallel('webserver', 'watch')));
