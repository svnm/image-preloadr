## image-preloadr

[![npm version](https://badge.fury.io/js/image-preloadr.svg)](https://badge.fury.io/js/image-preloadr)

preloads an array of images to the dom at the bottom of the body element

``` js
var preload = require('image-preloadr');

// preload your images...
preload([
  'public/img/img1.png',
  'public/img/img2.png'
  ]
)

```
## Running Tests server side

**modify test.js for any tests**

    npm install
    npm test

## Running Tests client side

**modify test.js for any tests**

    npm install

make sure you have webpack installed globally

`npm install webpack -g`

compile test.js to a bundle with webpack

	webpack ./test/test.js ./test/test-bundle.js

open test.html to view the tests in the browser

## License

[MIT](http://isekivacenz.mit-license.org/)
