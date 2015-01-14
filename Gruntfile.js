module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// grunt-contrib-connectの設定(Webサーバの設定)
		connect: {
			server: {
				options:{
					port: 8000,
					base: '/Users/sakamoto.keita/web_audio_api_drums',
					keepalive: true,
					hostname: 'localhost'
				}
			}
		},

		watch: {
			dev: {
				files: ["index.html"]
			}
		}
	});


	//使うプラグインの読み込み
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load tasks(grunt実行時に読み込むプラグイン)
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default tasks(grunt実行時に実行するタスク)
	grunt.registerTask('default', ['connect']);

};