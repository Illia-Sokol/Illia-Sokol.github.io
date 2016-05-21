
module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: 'src/js/*.js',
				dest: 'dist/js/built.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'dist/js/built.min.js': ['dist/js/built.js']
				}
			}
		},
		concat_css: {
			options: {

			},
			all: {
				src: ["src/css/*.css"],
				dest: "dist/css/main.css"
			},
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/css/',
					src: ['main.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
};

