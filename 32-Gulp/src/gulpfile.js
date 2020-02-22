const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('tarea 1', () => {
    console.log('Hola Amigo yo soy la tarea UNO');
    console.log('Hola Amigo yo soy la tarea DOS');
});

gulp.task('default', () => {
    console.log('Hola Amigo yo soy la tarea UNO DEFAULT');
    console.log('Hola Amigo yo soy la tarea DOS DEFAULT');
});