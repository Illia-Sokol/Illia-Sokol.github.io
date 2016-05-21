
module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'dist/js/built.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'dist/built.min.js': ['src/js/*.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
};



