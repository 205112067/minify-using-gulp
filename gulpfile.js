
// Gulp.js configuration
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    pump = require('pump');

//minify task for js file of js folder
gulp.task('minify-js', function (cb) {
    pump([
        gulp.src('src/main/webapp/js/**/*.**'),
        uglify(),
        gulp.dest('build/src/main/webapp/js/')
    ],
        cb
    );
});

//minify task for css file of folder css
gulp.task('minify-css', function () {
    return gulp.src('src/main/webapp/css/**/*.**')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/src/main/webapp/css'));
});


//run production build task to mini
gulp.task('productionBuild', ['minify-js', 'minify-css']);