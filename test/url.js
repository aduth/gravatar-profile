/**
 * External dependencies
 */

import { expect } from 'chai';

/**
 * Internal dependencies
 */

import url from '../src/url';

describe( '#url', function() {
	it( 'should return a Gravatar profile URL', function() {
		const result = url( 'andrew@andrewduthie.com' );

		expect( result ).to.equal( 'https://www.gravatar.com/a7ce947b6c1e30a4857068628ada24e1.json' )
	} );
} );
