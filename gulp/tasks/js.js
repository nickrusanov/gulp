import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

export default () =>
	app.gulp.src(app.path.js.src, { sourcemaps: app.plugins.isDev })
		.pipe(webpack(app.plugins.webpack))
		.pipe(babel(app.plugins.babel))
		.pipe(uglify())
		.pipe(app.gulp.dest(app.path.js.dist, { sourcemaps: app.plugins.isDev }))
