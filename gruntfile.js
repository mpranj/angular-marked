module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    'pkg': grunt.file.readJSON('bower.json'),

    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**']
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['ngdocs']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
};
