const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		// @ts-ignore
		...defaultConfig.entry(),
		'core-extender': path.resolve(
			__dirname,
			'src/core-extender/index.js'
		),
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@components': path.resolve( __dirname, 'components' ),
			'@config': path.resolve( __dirname, 'config' ),
			'@controls': path.resolve( __dirname, 'controls' ),
			'@hooks': path.resolve( __dirname, 'hooks' ),
			'@utils': path.resolve( __dirname, 'utils' ),
			'@icons': path.resolve( __dirname, 'components/icons' ),
		},
	},
};
