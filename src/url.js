/**
 * External dependencies
 */

import { md5 } from 'blueimp-md5';

/**
 * Internal dependencies
 */

import { BASE_URL } from './constants';

/**
 * Given an email address, returns a Gravatar profile JSON URL.
 *
 * @param  {String} email Gravatar email address
 * @return {String}       Gravatar profile JSON URL
 */
export default function url( email ) {
	return `${ BASE_URL }/${ md5( email ) }.json`;
}
