var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  // var b = browserify('src/ball.js')
  //   .bundle().pipe(gulp.dest('dist/js'));
  // gulp.src('src/*.js')
  //   .pipe(browserify())
  //   .pipe(uglify())
  //   .pipe(gulp.dest('dist/js'));
  return browserify('./src/collision_game.js')
    .bundle()
    .pipe(source('collision-game.js'))
    .pipe(gulp.dest('./dist/js'));
});

// gulp.task('browserify', function() {
//   var bundler = browserify({
//     entries: ['./src/game.js'],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
//   });
//
//   var watcher  = watchify(bundler);
//
//   return watcher
//    .on('update', function () { // When any files update
//        var updateStart = Date.now();
//        console.log('Updating!');
//        watcher.bundle() // Create new bundle that uses the cache for high performance
//        .pipe(source('./src/game.js'))
//    // This is where you add uglifying etc.
//        .pipe(gulp.dest('./dist/js'));
//        console.log('Updated!', (Date.now() - updateStart) + 'ms');
//    })
//    .bundle()
//    .pipe(source('./src/game.js'))
//    .pipe(gulp.dest('./dist/js'));
// })

gulp.task('default', ['js']);
