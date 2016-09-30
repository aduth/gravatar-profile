/**
 * External dependencies
 */

import { jsdom } from 'jsdom';
import { expect } from 'chai';
import fauxjax from 'faux-jax';

/**
 * Internal dependencies
 */

import gravatar from '../src/index.browser';
import { BASE_URL } from '../src/constants';
import { INVALID_REQUEST_PATH, VALID_REQUEST_PATH, INVALID_RESPONSE, VALID_RESPONSE } from './constants';

/**
 * Tests
 */

describe( 'browser', () => {
	before( () => {
		// DOM initialization
		global.window = jsdom().defaultView;
		global.document = window.document;

		// Mock network requests
		fauxjax.install();
		fauxjax.on( 'request', ( request ) => {
			let callback = request.requestURL.match( /callback=(__jp\d+)/ );
			callback = callback ? callback[ 1 ] : '';

			let response;
			switch ( request.requestURL ) {
				case `${ BASE_URL }${ VALID_REQUEST_PATH }?callback=${ callback }`:
					response = VALID_RESPONSE;
					break;
				case `${ BASE_URL }${ INVALID_REQUEST_PATH }?callback=${ callback }`:
					response = INVALID_RESPONSE;
					break;
				default:
					response = '';
			}

			request.respond( 200, {}, `${ callback }(${ JSON.stringify( response ) })` );
		} );
	} );

	after( () => {
		delete global.document;
		delete global.window;

		fauxjax.restore();
	} );

	describe( '#gravatar', () => {
		it( 'should request a gravatar profile from an email address', ( done ) => {
			gravatar( 'andrew@andrewduthie.com', ( err, profile ) => {
				expect( err ).to.be.empty;
				expect( profile.displayName ).to.equal( 'Andrew Duthie' );

				done();
			} );
		} );

		it( 'should return null for a profile that does not exist', ( done ) => {
			gravatar( 'nobody@andrewduthie.com', ( err, profile ) => {
				expect( err ).to.be.empty;
				expect( profile ).to.be.null;

				done();
			} );
		} );
	} );
} );
