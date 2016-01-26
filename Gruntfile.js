module.exports = function(grunt) {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: 'tasks/*.js',
    },
  });

  grunt.initConfig(configs);

  grunt.registerTask('test', ['newer:babel', 'newer:copy', 'mochaTest']);
  grunt.registerTask('test-ci', ['clean', 'babel', 'copy', 'mochaTest']);
};
