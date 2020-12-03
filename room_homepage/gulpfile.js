let gulp = require('gulp');
let sass = require('gulp-sass');

function style() {
    return (
        gulp
            .src('*.scss')
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest('css'))
    );
}

exports.style = style;

let cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.watch('./css/*.css', function (evt) {
        gulp.task('minify-css');
    });
});