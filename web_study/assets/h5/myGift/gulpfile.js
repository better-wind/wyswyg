var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    group = require('gulp-group-files'),
    minifycss = require('gulp-minify-css'),//css压缩
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名;
    currDir = 'myGift',
    branchName = '160407',
    path={
     src:'../'+currDir,
     dest:'../../../../build/wap/'+currDir+'/'+branchName
    },
    srcImg ={
        src:path.src+'/image',
        dest:path.dest+'/image'
    },
    srcSass = {
        src:path.src+'/css',
        dest:path.dest+'/css'
    },
    srcJs = {
        src:path.src+'/js',
        dest:path.dest+'/js'
    };

gulp.task('clean',function(){
    return gulp.src([srcSass.dest,srcJs.dest],{read:false})
        .pipe(clean({force:true}));
});
gulp.task('sass',function(){
    return gulp.src([srcSass.src+'/mygift.scss',srcSass.src+'/wap_global.scss'])
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(concat('myGift.css'))
        .pipe(gulp.dest(srcSass.dest))
        .pipe(minifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(srcSass.dest));
});
//gulp.task('concat-js',function(){
//    //return gulp.src(['../lib/fastclick/fastclick.js',srcJs.src+'/jquery.js'])
//    return gulp.src([])
//        .pipe(concat('lib.js'))
//        .pipe(gulp.dest(srcJs.dest))
//        .pipe(uglify())
//        .pipe(rename({extname:'.min.js'}))
//        .pipe(gulp.dest(srcJs.dest))
//});
gulp.task('js',function(){
    return gulp.src([srcJs.src+'/jquery.js',srcJs.src+'/jquery.isotope.js',srcJs.src+'/script.js',srcJs.src+'/mygift.js'])
        .pipe(concat('myGift.js'))
        .pipe(gulp.dest(srcJs.dest))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(srcJs.dest));
});
gulp.task('image',function(){
    return gulp.src([srcImg.src+'/*.**'])
        .pipe(gulp.dest(srcImg.dest));
});
gulp.task('watch',function(){
   gulp.watch([path.src+'/css/*.scss',path.src+'/js/*.js'],['default']);
});
gulp.task('default',['clean'],function(){
    gulp.start('sass','js','image')
});
