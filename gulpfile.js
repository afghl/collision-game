var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');

gulp.task('js', function() {
  var b = browserify('./src/collision_game.js');
  var watcher = watchify(b);
  return watcher
   .on('update', function () {
       watcher.bundle()
       .pipe(source('collision-game.js'))
       .pipe(gulp.dest('./dist/js'));
   })
   .bundle()
   .pipe(source('./src/game.js'))
   .pipe(gulp.dest('./dist/js'));

});

gulp.task('default', ['js']);
