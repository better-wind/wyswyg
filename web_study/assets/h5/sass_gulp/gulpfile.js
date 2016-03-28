/**
 * Created by ¼Ñ·é on 2016/3/2.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    //group = require('gulp-group-files'),
    //imagemin = require('gulp-imagemin'),
    //livereload = require('gulp-livereload'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    branchName = 'sass_gulp',
    branchTime = '20160302',
    path ={
      src:'dev',
      dist:'../../../build/h5/'+branchName+'/'+branchTime
    },
    srcSass = {
        src:path.src+'/css',
        dist:path.dist+'/css'
    },
    srcJs = {
        src:path.src+'/js',
        dist:path.dist+'/js'
    }

gulp.task('clean',function(){
    return gulp.src([srcSass.dist,srcJs.dist],{read:false}).pipe(clean({force:true}));
});
gulp.task('sass',function(){
   return gulp.src(srcSass.src+'/rem.scss')
       .pipe(sass({outputStyle:'expanded'}))
       .pipe(gulp.dest(srcSass.dist))
       .pipe(minify())
       .pipe(rename({extname:'.min.css'}))
       .pipe(gulp.dest(srcSass.dist))
});
gulp.task('js',function(){
   return gulp.src([srcJs.src+'/rem.js',path.src+'/common/js/tool.js'])
         .pipe(gulp.dest(srcJs.dist))
         .pipe(uglify())
       .pipe(rename({extname:'.min.js'}))
         .pipe(gulp.dest(srcJs.dist))
});
gulp.task('watch',function(){
    gulp.watch([srcSass.src+'/*.scss',srcJs.src+'/*.js',path.src+'/common/js/*.js'],['default']);
})
gulp.task('default',['clean'],function(){
    gulp.start('sass','js');
})
