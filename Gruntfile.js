module.exports = function(grunt) {

  // Init Grunt tasks configuration
  grunt.initConfig({
    /**
     * Task that belongs to plugin "grunt-contrib-connect".
     */
    connect: {
      server: {
        options: {
          /**
           * hostname: with '0.0.0.0' or '*' it becomes accesible from other
           * device in the network. With 'localhost' not.
           */
          hostname: "*",
          port: 8000,
          base: 'src/app', // path to serve from
          keepalive: false, // true avoids the server from stopping after running all the Grunt tasks
          livereload: true, // connects with the live reload server of task 'watch'
          open: true // opens a browser in the folder where the server is listening
        }
      }
    },
    watch: {
      livereload: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register and redefine tasks
  grunt.registerTask('serve', ['gruntStart','connect','watch']);
  grunt.registerTask('gruntStart', 'Log Grunt has started.', function() {
    grunt.log.write('Grunfile started successfully!').ok();
  });
  grunt.registerTask('default', ['serve']);
};
