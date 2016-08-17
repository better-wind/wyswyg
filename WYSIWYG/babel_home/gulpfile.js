/**
 * Created by wjf55 on 2016/7/21.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    path = {
        src:'dev',
        dest:'build'
    };

gulp.task('clean',function(){
    return gulp.src([path.dest],{read:false}).pipe(clean({force:false}));
})
gulp.task('babel',function(){
    return gulp.src([path.src+'/es6/test.js'])
        .pipe(plumber())
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest(path.dest+'/js'))
        .pipe(uglify())
        .pipe(rename({extname:'.min.js'}))
        .pipe(gulp.dest(path.dest+'/js'))
})
gulp.task('watch',function(){
    gulp.watch([path.src+'/es6/*.js'],['default']);
})
gulp.task('default',['clean'],function(){
    gulp.start('babel');
})

