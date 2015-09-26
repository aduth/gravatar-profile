/**
 * External dependencies
 */

var webpack = require( 'webpack' );

module.exports = {
	entry: __dirname + '/src/index.browser.js',
	resolve: {
		extensions: [ '', '.js' ],
		root: [
			__dirname + '/src'
		]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/src',
				loaders: [ 'babel' ]
			},
			{
				test: require.resolve( 'blueimp-md5' ),
				loaders: [ 'imports?define=>false' ]
			}
		]
	}
};
