import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';
import rename from 'gulp-rename';

export default () =>
	app.gulp.src([
		app.path.js.src,
	], { sourcemaps: app.plugins.isDev })
		.pipe(babel(app.plugins.babel))
		.pipe(webpack(app.plugins.webpack))
		.pipe(concat('script.js'))
		.pipe(app.gulp.dest(app.path.js.dist, { sourcemaps: app.plugins.isDev }))
		.pipe(rename(app.plugins.rename))
		.pipe(uglify())
		.pipe(app.gulp.dest(app.path.js.dist, { sourcemaps: app.plugins.isDev }))