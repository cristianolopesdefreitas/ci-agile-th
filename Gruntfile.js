'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    concat:{
      distCSS:{
        src:[
          'client/vendor/materialize/dist/css/materialize.min.css',
          'client/vendor/angular-loading-bar/build/loading-bar.min.css'
        ],
        dest:'client/dist/css/libs.min.css'
      },
      distStyleCSS:{
        src:[
          'client/css/style.css',
          'client/css/css.css'
        ],
        dest:'client/dist/css/style.css'
      },
      distConcatCSS:{
        src:['client/dist/css/libs.min.css','client/dist/css/style.min.css'],
        dest:'client/dist/css/main.css'
      },
      /**
      * Concat Libs JS
      */
      distConcatJS:{
        src:['client/vendor/angular/angular.min.js',
        'client/vendor/angular-ui-router/release/angular-ui-router.min.js',
        'client/vendor/angular-resource/angular-resource.min.js',
        'client/vendor/angular-sanitize/angular-sanitize.min.js',
        'client/vendor/angular-loading-bar/build/loading-bar.min.js',
        'client/vendor/jquery/dist/jquery.min.js',
        'client/vendor/materialize/dist/js/materialize.min.js'
      ],
      dest:'client/dist/js/libs.min.js'
    }
  },
  cssmin:{
    dist:{
      src:['client/dist/css/style.css'],
      dest:'client/dist/css/style.min.css'
    }
  },
  copy:{
    fonts:{
      expand: true,
      cwd:'client/fonts/',
      src:['**'],
      dest:'client/dist/fonts/'
    }
  },
  uglify: {
    options: {
      mangle: false
    },
    /**
    * Concat scripts personal
    */
    dist:{
      src:['client/js/services/services.js',
      'client/js/app.js',
      'client/js/config.js'],
      dest:'client/dist/js/scripts.min.js'
    }
  },
  htmlmin:{
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    views:{
      expand: true,
      cwd: 'client/views/',
      src:['*.html'],
      dest:'client/dist/views'
    },
    dist:{
      src:['client/index-prod.html'],
      dest:'client/dist/index.html'
    },
  }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

grunt.registerTask('dist', ['concat','cssmin','uglify','htmlmin','copy']);
};