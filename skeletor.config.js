module.exports = {
	tasks: [
		{
			name: 'build',
			subTasks: [
				require('./skeletor/build/css.config.js'),
				require('./skeletor/build/static.config.js')
			]
		},
		{
			name: 'export',
			environment: 'production',
			subTasks: [
				require('./skeletor/export/css.config.js'),
				require('./skeletor/export/static.config.js')
			]
		},
		{
			name: 'watch',
			subTasks: [
				require('./skeletor/watch.config.js')
			]
		}
	]
}