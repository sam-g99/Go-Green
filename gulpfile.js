const {dest, src, watch, series} = require('gulp');
const sass = require('gulp-sass')
const minify = require('gulp-minify')
const image = require('gulp-image');
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
function copyHtml(){
    return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}
function images(){
    return src('src/images/*')
    .pipe(image())
    .pipe(dest('./dist/images'));
}
function scss(){
    return src('src/css/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('dist/css'));
}
function combineScripts(){
    return src(['src/js/aos.js','src/js/zenscroll.js','src/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(dest('dist/js'))
}

exports.imgs = images;
exports.css = scss;
exports.tasks = series(scss, copyHtml, images, combineScripts);
exports.default = function() {
    watch('src/css/**/*scss', scss)
    watch('src/js/*.js', combineScripts)
    watch('src/*.html', copyHtml)
}