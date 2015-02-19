'use strict';

module.exports = function(grunt) {
  var jsFileList = [
    'vendor/jquery/dist/jquery.js',
    'vendor/minicolors/jquery.minicolors.js',
    'assets/js/_*.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [jsFileList],
        dest: 'assets/js/scripts.js'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.js',
        '!assets/**/*.min.*'
      ]
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
        tasks: 'sass'
      },
      js: {
        files: [
          jsFileList,
          '<%= jshint.all %>',
        ],

        tasks: ['jshint', 'concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
