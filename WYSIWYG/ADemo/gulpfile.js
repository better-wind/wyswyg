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
      src:'dev/',
      dest:'build/',
    },
    viewflex = {
        css:{
            src:path.src+'viewflex/css/',
            dest:path.dest+'viewflex/css/'
        },
        js:{
            src:path.src+'viewflex/js/',
            dest:path.dest+'viewflex/js/'
        }
    }

gulp.task('clean',function(){
    return gulp.src([path.dest],{read:false}).pipe(clean({force:true}));
});
gulp.task('sass',function(){
   return gulp.src([viewflex.css.src+'/viewflex.scss'])
       .pipe(sass({outputStyle:'expanded'}))
       .pipe(gulp.dest(viewflex.css.dest))
       .pipe(minify())
       .pipe(rename({extname:'.min.css'}))
       .pipe(gulp.dest(viewflex.css.dest))
});
//gulp.task('js',function(){
//   return gulp.src([srcJs.src+'/aaa.js',srcJs.src+'/rem.js',srcJs.src+'/feedback.js',path.src+'/common/js/tool.js',srcJs.src+'/jsyasuo.js'])
//         .pipe(gulp.dest(srcJs.dest))
//         .pipe(uglify())
//       .pipe(rename({extname:'.min.js'}))
//         .pipe(gulp.dest(srcJs.dest))
//});
gulp.task('watch',function(){
    gulp.watch([path.src+'*/css/*.scss',path.src+'*/js/*.js'],['default']);
})
gulp.task('default',['clean'],function(){
    gulp.start('sass');
})
