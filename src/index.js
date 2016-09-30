/**
 * External dependencies
 */

import request from 'superagent';

/**
 * Internal dependencies
 */

import url from './url';
import maybePromisify from './maybe-promisify';
import { INVALID_RESPONSE } from './constants';

/**
 * Given an email address and callback, requests the associated Gravatar,
 * invoking the callback with the profile details when the request is complete.
 *
 * @param  {String}   email    Gravatar email address
 * @param  {Function} callback Callback to invoke when request complete
 * @return {Promise}           A Promise object, if supported
 */
export default function gravatar( email, callback ) {
	callback = maybePromisify( callback );

	request( url( email ) )
		.set( 'User-Agent', 'superagent' )
		.end( ( error, response ) => {
			let profile;
			if ( response.body && response.body.entry ) {
				profile = response.body.entry[ 0 ];
			}

			if ( ! error && ( profile === INVALID_RESPONSE || ! profile ) ) {
				profile = null;
			}

			callback( error, profile );
		} );

	return callback.promise;
}
