module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: 8585
            },
            css: {
                files: ['assets/css/**/*.less'],
                tasks: ['less', 'autoprefixer', 'csso']
            },
            html: {
                files: ['**/*.html']
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['uglify']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "dist/style.css": "assets/css/main.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            your_target: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        csso: {
            compress: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/main.min.js': ['assets/js/**/*.js']
                }
            }
        },
        /*start - grunt imagemin*/
        imagemin: { // Task   
            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'assets/img/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/img/' // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['less', 'autoprefixer', 'csso', 'uglify', 'watch']);
};