/**
 * External dependencies
 */

var assign = require( 'lodash.assign' );

/**
 * Internal dependencies
 */

var common = require( './webpack.config.common' );

module.exports = assign( {}, common, {
	output: {
		path: __dirname + '/lib',
		filename: 'index.browser.js',
		libraryTarget: 'commonjs2',
		library: true
	}
} );
