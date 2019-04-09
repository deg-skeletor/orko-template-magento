module.exports = {
	name: 'watch',
	plugins: [
		{
			name: '@deg-skeletor/plugin-watch',
			config: {
				targets: [
					{
						name: 'css',
						paths: 'source/css/**/*.css',
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: 'export',
								subTasks: ['css']
							}
						]
					},
					{
						name: 'static',
						paths: ['source/fonts/**/*', 'source/images/**/*'],
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: 'export',
								subTasks: ['static']
							}
						]
					}
				]
			}
		}
	]
};