/**
 * External dependencies
 */

var assign = require( 'lodash.assign' ),
	BabiliWebpackPlugin = require( 'babili-webpack-plugin' );

/**
 * Internal dependencies
 */

var common = require( './webpack.config.common' );

module.exports = assign( {}, common, {
	output: {
		path: __dirname + '/dist',
		filename: 'gravatar-profile.min.js',
		libraryTarget: 'umd',
		library: 'gravatar'
	},
	plugins: [
		new BabiliWebpackPlugin()
	]
} );
