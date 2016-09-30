/**
 * External dependencies
 */

import { expect } from 'chai';
import nock from 'nock';

/**
 * Internal dependencies
 */

import { BASE_URL } from '../src/constants';
import { INVALID_REQUEST_PATH, VALID_REQUEST_PATH, INVALID_RESPONSE, VALID_RESPONSE } from './constants';
import gravatar from '../src/index';

/**
 * Tests
 */

describe( 'server', () => {
	before( () => {
		// Mock network requests
		nock( BASE_URL ).get( VALID_REQUEST_PATH ).reply( 200, VALID_RESPONSE );
		nock( BASE_URL ).get( INVALID_REQUEST_PATH ).reply( 200, INVALID_RESPONSE );
	} );

	after( () => {
		nock.restore();
	} );

	describe( '#gravatar', () => {
		it( 'should request a gravatar profile from an email address', ( done ) => {
			gravatar( 'andrew@andrewduthie.com', ( err, profile ) => {
				expect( err ).to.be.empty;
				expect( profile.displayName ).to.equal( 'Andrew Duthie' );

				done( err );
			} );
		} );

		it( 'should return null for a profile that does not exist', ( done ) => {
			gravatar( 'nobody@andrewduthie.com', ( err, profile ) => {
				expect( err ).to.be.empty;
				expect( profile ).to.be.null;

				done( err );
			} );
		} );
	} );
} );
