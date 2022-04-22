// ----------------------------
// 1. Déclaration des variables
// ----------------------------

let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
let browserSync = require('browser-sync').create();

// -------------
// 2. Mes tâches
// -------------

// Remplace la moulinette de sass qui va transformer .scss en .css
gulp.task('sassification', function(){
  return gulp.src('dev/css/*.scss')
    // Ajout de prefixe en fonction du naviguateur
    .pipe(autoprefixer({
      cascade: false
    }))
    // Initialisation du fichier map
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    // rename le fichier qui sera sorti
    .pipe(rename(function(path){
      path.basename += ".min";
    }))
    // Destination du fichier map
    .pipe(sourcemaps.write(''))
    // le dossier destination du fichier
    .pipe(gulp.dest('prod/css'));
});

// Remplace le(s) fichier(s) HTML de la prod par les maj
gulp.task('htmlification', function(){
  return gulp.src('dev/*.html')
    // le dossier destination du fichier
    .pipe(gulp.dest('prod'));
});

// Remplace le fichier JS de la prod par les maj
gulp.task('jsification', function(){
  return gulp.src('dev/js/*.js')
    // Uglify
    .pipe(uglify())
    // rename le fichier qui sera sorti
    .pipe(rename(function(path){
      path.basename += ".min";
    }))
    // le dossier destination du fichier
    .pipe(gulp.dest('prod/js'));
});

// Transferer les images de dev en prod
gulp.task('imageTransfer', function(){
  return gulp.src('dev/img/*')
    // le dossier destination du fichier
    .pipe(gulp.dest('prod/img'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "prod/"
      }
  });
});

// -----------------------
// 3. Exécution des tâches
// -----------------------

gulp.task('observation', gulp.parallel('browser-sync', 'sassification', 'htmlification','jsification', 'imageTransfer', function(){
  gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
  gulp.watch('dev/*.html', gulp.series('htmlification'));
  gulp.watch('dev/js/*.js', gulp.series('jsification'));
  gulp.watch('prod/**/*').on('change', browserSync.reload);
}));
gulp.task('default', gulp.series('observation'));