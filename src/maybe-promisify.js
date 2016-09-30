/**
 * Optionally given a callback function, returns a new function which, when
 * invoked, calls the callback and resolves a Promise object. The Promise
 * object is exposed on the function on the `promise` property.
 *
 * @param  {?Function} callback Optional node-style callback
 * @return {Function}           Combined original callback and Promise resolver
 */
export default function maybePromisify( callback ) {
	let callbacks = [ callback ],
		promise;

	if ( 'function' === typeof Promise ) {
		promise = new Promise( ( resolve, reject ) => {
			callbacks.push( ( error, data ) => {
				if ( error ) {
					reject( error );
				} else {
					resolve( data );
				}
			} );
		} );
	}

	callbacks = callbacks.filter( Boolean );

	function invokeCallbacks() {
		callbacks.forEach( ( cb ) => cb.apply( null, arguments ) );
	}

	invokeCallbacks.promise = promise;

	return invokeCallbacks;
}
