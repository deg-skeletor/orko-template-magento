const {directories} = require('../common/static.config.js');
const outputDir = '../app/design/frontend/vendor/theme/web';

module.exports = {
    name: 'static',
    plugins: [
        {
            name: '@deg-skeletor/plugin-copy',
            config: {
                directories: directories({
					imagesDestPath: `${outputDir}/images/`,
					fontsDestPath: `${outputDir}/fonts/`
				})
            }
        }
    ]
};