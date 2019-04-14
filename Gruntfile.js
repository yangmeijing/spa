/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
                configFile: '.eslintrc.json'
          
      },
        target: ['*/*.js']
        
    },
  csslint: {
    options: {
              csslintrc: '.csslintrc'
          
    },
        src: '*/*.css'
        
  },
  htmlhint: {
    options: {
              htmlhintrc: '.htmlhintrc'
          
    },
          src: '*/*.html'
                
  },
    
  htmlmin: {
  options: {
          collapseWhitespace: true,
                  preserveLineBreaks: false
                        
  },
  index:{
  files: {
        'dist/00-template/index.html': './00-template/index.html',
        'dist/10-timer-button/index.html': './10-timer-button/index.html',
        'dist/11-password-visual/index.html': './11-password-visual/index.html',
        'dist/12-range/index.html': './12-range/index.html',
        'dist/31-echart/index.html': './31-echart/index.html',
        'dist/32-map/index.html': './32-map/index.html',
        'dist/33-hightlight/index.html': './33-hightlight/index.html',
        'dist/41-timer-button/index.html': './41-timer-button/index.html',


                        
  }
  }    
  },
  cssmin: {
        'dist/00-template/layout.css': './00-template/layout.css',
        'dist/10-timer-button/layout.css': './10-timer-button/layout.css',
        'dist/11-password-visual/layout.css': './11-password-visual/layout.css',
        'dist/12-range/layout.css': './12-range/layout.css',
        'dist/31-echart/layout.css': './31-echart/layout.css',
        'dist/32-map/layout.css': './32-map/layout.css',
        'dist/33-hightlight/layout.css': './33-hightlight/layout.css',
        'dist/41-timer-button/layout.css': './41-timer-button/timer-button.css',

  },
  uglify: {
  release:{
  files: {
        'dist/00-template/main.js': './00-template/main.js',
        'dist/10-timer-button/main.js': './10-timer-button/main.js',
        'dist/11-password-visual/main.js': './11-password-visual/main.js',
        'dist/12-range/main.js': './12-range/main.js',
        'dist/31-echart/main.js': './31-echart/main.js',
        'dist/32-map/main.js': './32-map/main.js',
        'dist/33-hightlight/main.js': './33-hightlight/main.js',
        'dist/41-timer-button/main.js': './41-timer-button/timer-button.js',

  }
        
  }
  }



  });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);

};
