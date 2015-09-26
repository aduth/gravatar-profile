/**
 * External dependencies
 */

import request from 'request';

/**
 * Internal dependencies
 */

import url from './url';
import { INVALID_RESPONSE } from './constants';

/**
 * Given an email address and callback, requests the associated Gravatar,
 * invoking the callback with the profile details when the request is complete.
 *
 * @param  {String}   email    Gravatar email address
 * @param  {Function} callback Callback to invoke when request complete
 */
export default function gravatar( email, callback ) {
	if ( 'function' !== typeof callback ) {
		throw new TypeError( 'A callback function must be specified' );
	}

	request( {
		url: url( email ),
		headers: {
			'User-Agent': 'request'
		}
	}, function( error, response, body ) {
		let profile;
		try {
			profile = JSON.parse( body ).entry[ 0 ];
		} catch ( e ) {}

		if ( ! error && ( profile === INVALID_RESPONSE || ! profile ) ) {
			profile = null;
		}

		callback( error, profile );
	} );
}
