'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: grunt.file.readJSON('config/assets.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 'server.js', 'server/**/*.js', 'public/**/**'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public/views/**', 'server/views/**'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['public/assets/css/**'],    
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            production: {
                files: '<%= assets.js %>'
            }
        },
        cssmin: {
            combine: {
                files: '<%= assets.css %>'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ext: 'js,html,css',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['cssmin', 'uglify', 'nodemon']);
};