import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

export default () =>
	app.gulp.src(app.path.html.src)
		.pipe(fileInclude())
		.pipe(htmlmin(app.plugins.htmlmin))
		.pipe(app.gulp.dest(app.path.html.dist))
