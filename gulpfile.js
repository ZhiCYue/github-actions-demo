const gulp = require('gulp');

gulp.task('pages', (done) => {
  gulp.src([
    'src/*'
  ]).pipe(gulp.dest('./dist'))

  done()
})


gulp.task('build', gulp.series(['pages'], (done) => {
  done()
}))
