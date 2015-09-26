/**
 * External dependencies
 */

import jsonp from 'jsonp';

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

	jsonp( url( email ), function( error, data ) {
		let profile;
		if ( ! error && data && Array.isArray( data.entry ) && data.entry.length ) {
			profile = data.entry[ 0 ];
		}

		if ( ! error && ( profile === INVALID_RESPONSE || ! profile ) ) {
			profile = null;
		}

		callback( error, profile );
	} );
}
