const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const nemoConfig = require('./nemo.config.json');

const jsdocConfig = {
  tags: {
    allowUnknownTags: true
  },
  plugins: ['plugins/markdown'],
  opts: {
    template: 'node_modules/docdash',
    encoding: 'utf8',
    destination: 'docs-pet-store/',
    recurse: true,
    verbose: true
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: true,
    useLongnameInNav: false,
    showInheritedInNav: true
  }
};

gulp.task('doc', function (cb) {
  gulp
    .src([nemoConfig.outDir + '/mods/**/*.js', './src/otherServices/*.js'], {
      read: false
    })
    .pipe(jsdoc(jsdocConfig, cb));
});
