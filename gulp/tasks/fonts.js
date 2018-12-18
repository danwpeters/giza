const gulp = require("gulp");
const gulpif = require("gulp-if");

const CONFIG = require("../config");

const paths = {
  src: [`${CONFIG.BASE}/fonts/**/*`],
  build: `${CONFIG.DEST_BUILD}/assets/fonts`,
  prod: `${CONFIG.DEST_PROD}/assets/fonts`
};

gulp.task("fonts", function() {
  return gulp
    .src(paths.src)
    .pipe(gulpif(!global.production, gulp.dest(paths.build)))
    .pipe(gulpif(global.production, gulp.dest(paths.prod)));
});
