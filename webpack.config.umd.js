/**
 * External dependencies
 */

var assign = require( 'lodash.assign' ),
	webpack = require( 'webpack' );

/**
 * Internal dependencies
 */

var common = require( './webpack.config.common' );

module.exports = assign( {}, common, {
	output: {
		path: __dirname + '/dist',
		filename: 'gravatar-profile.js',
		libraryTarget: 'umd',
		library: 'gravatar'
	}
} );
