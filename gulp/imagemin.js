'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let resizeImageTasks = [];
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));
  console.log(dest);
  let sizes  = [320,640,1280,1980];

  sizes.forEach(function (size) {
    let resizeImageTask = 'resize_' + size;
    gulp.task(resizeImageTask, function () {
      return gulp.src(path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}'))
        .pipe(plugins.changed(dest))
        .pipe(gulpif(args.production, plugins.imagemin([
          plugins.imagemin.jpegtran({progressive: true}),
          plugins.imagemin.svgo({plugins: [{removeViewBox: false}]})
        ], {use: [pngquant({speed: 10})]})))
        .pipe(gulpif(args.production, plugins.imageResize({
          width: size,
          height: size,
          upscale: false
        })))
        .pipe(plugins.rename(function (path) {
          path.dirname = path.dirname+'/'+size+'/';
        }))
        .pipe(gulp.dest(dest))
    });
    resizeImageTasks.push(resizeImageTask);
  });

  gulp.task('imagemin', resizeImageTasks);
}
