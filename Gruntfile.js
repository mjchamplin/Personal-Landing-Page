const sass = require('sass');

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      options: {
       implementation: sass
      },
      dist: {                            // Target
        files: {                         // Dictionary of files
          'assets/css/main.css': 'includes/css/main.sass',       // 'destination': 'source'
          'assets/css/reset.css': 'includes/css/reset.sass'
        }
      },
      build: {
        files: {
          'assets/css/main.css': 'includes/css/main.sass',   // 'destination': 'source'
          'assets/css/reset.css': 'includes/css/reset.sass'
        }
      }
    },


    clean: {
      build: {
        src: [ 'assets' ]
      },
    },

    copy: {
      resets: {
        cwd: 'includes/css/',
        src: ['reset.css'],
        dest: 'assets/css',
        expand: true
      },
      pdfs: {
        cwd: 'includes/pdf/',
        src: ['**/*.pdf'],
        dest: 'assets/pdf',
        expand: true
      },
      icons: {
        cwd: 'includes/icons/',
        src: ['**/*.png', '**/*.ico', '**/*.webmanifest'],
        dest: 'assets/icons',
        expand: true
      },
      images: {
        cwd: 'includes/img/',
        src: ['**/*.png', '**/*.jpg'],
        dest: 'assets/img',
        expand: true
      }
    },

    uglify: {
      build: {
        files: {
          'assets/js/functions.js': ['includes/js/functions.js']
        }
      }
    },

    watch: {
      files: ['includes/css/*.sass'],
      tasks: ['sass:dist']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass:dist']);
  grunt.registerTask('build', ['clean', 'copy', 'sass:build', 'uglify']);
};
