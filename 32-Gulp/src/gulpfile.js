const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// gulp.task('default', () => {
//     console.log('Hola Amigo yo soy la tarea UNO DEFAULT');
//     console.log('Hola Amigo yo soy la tarea DOS DEFAULT');
// });

// gulp.task('tarea 1', () => {
//     console.log('Hola Amigo yo soy la tarea UNO');
//     console.log('Hola Amigo yo soy la tarea DOS');
// });

gulp.task('sass', () => {
    gulp.src('./dev/scss/*.scss')
        .pipe(sass({
            outputStyle: 'nested'
        }))
        .pipe(autoprefixer({
            overrideBrowsersList: ['last 3 versions']
        }))
        .pipe(gulp.dest('./public/css/'))
});

gulp.task('pug', () => {
    gulp.src('./dev/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('default', () => {
    gulp.watch('./dev/scss/*.scss', gulp.series('sass'))
    gulp.watch('./dev/pug/*.pug', gulp.series('pug'))
});