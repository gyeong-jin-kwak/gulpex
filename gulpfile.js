// gulp module 호출
var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

// task()를 사용해서 기본 task정의
gulp.task('start', async function(){
  console.log('☆☆☆☆☆console test☆☆☆☆☆')
  gulp.src(['./app/src/index.html', './app/src/sub/*.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./dist'));
});