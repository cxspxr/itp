// generated on 2018-02-07 using generator-webapp 3.0.1
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const rupture = require('rupture');
const stylus = require('gulp-stylus');
const nodemon = require('gulp-nodemon');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let dev = true;

gulp.task('styles', () => {
  return gulp.src('app/styles/main.styl')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.stylus({
      paths: ['.'],
      compress: true,
      use: [rupture()]
    }))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
    const b = browserify({
      entries: 'app/scripts/main.js',
      transform: babelify,
      debug: true
    });

    return b.bundle()
        .pipe(source('main.js'))
        .pipe($.plumber())
        .pipe(buffer())
        .pipe($.uglify({compress: {drop_console: true}}))
        .pipe($.sourcemaps.init({loadMaps: true}))
        .pipe($.if(dev, $.sourcemaps.write('.')))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(reload({stream: true}));
});

function lint(files) {
  return gulp.src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('app/scripts/**/*.js')
    .pipe(gulp.dest('app/scripts'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js')
    .pipe(gulp.dest('test/spec'));
});

gulp.task('prod', ['styles', 'scripts', 'images', 'vendorimages'], () => {
  return gulp.src(['app/*.ico', 'app/**/*.pug'])
    .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('vendorimages', () => {
    return gulp.src('app/scripts/images/**/*')
        .pipe($.cache($.imagemin()))
        .pipe(gulp.dest('dist/scripts/images'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*',
    '!app/*.html',
    '!app/*.pug'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: './server.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	}).on('restart', function(){
		gulp.src('server.js')
			.pipe(reload({stream: true}))
			.pipe(notify('Reloading page, please wait...'));
	})
});
gulp.task('serve', () => {
  runSequence(['nodemon'], ['clean'], ['prod'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      proxy: 'localhost:3000'
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      'app/scripts/images/**/*'
    ]).on('change', reload);

    gulp.watch('app/**/*.pug', ['prod']);
    gulp.watch('app/styles/**/*.styl', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/scripts/images/**/*', ['vendorimages']);
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

gulp.task('build', ['lint', 'prod', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false;
    runSequence(['clean'], 'build', resolve);
  });
});
