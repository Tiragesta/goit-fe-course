const gulp = require('gulp');

gulp.task('copy', 
  function () {
    return gulp.src(
      'src/index.html'
    )
    .pipe(
      gulp.dest(
          'build/'
    ));
});

gulp.task(
  'default', 
  ['copy']
);

gulp.task('copy', 
  function () {
    return gulp.src(
      'src/css/style.css'
    )
    .pipe(
      gulp.dest(
          'build/css'
    ));
});

gulp.task(
  'default', 
  ['copy']
);


