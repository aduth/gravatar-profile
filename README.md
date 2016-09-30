Gravatar Profile
================

Gravatar Profile provides a simple API for retrieving Gravatar profile details for a given email address. It works on the server and in the browser, handling hashing and JSONP implementation details on your behalf.

## Usage

For usage in the browser, download the full or minified version of the script from the `dist` directory. When included in your browser, a `gravatar` function will be added to the window scope.

If your project incorporates a CommonJS build process, simply install and require `gravatar-profile`.

Gravatar Profile exposes a single function, `gravatar`, which accepts an email address and a callback function. The callback function will be invoked with the profile details of the email address. It follows the node pattern of providing an error as the first parameter if one was encountered. If the user could not be found, `profile` will be `null`.

```js
var gravatar = require( 'gravatar-profile' );

gravatar( 'andrew@andrewduthie.com', function( err, profile ) {
	console.log( profile.displayName );
	// -> "Andrew Duthie"
} );
```

## License

Copyright 2016 Andrew Duthie. Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
