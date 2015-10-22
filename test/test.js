var chai = require('chai');
var preload = require('../image-preloadr');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('preload()', function() {  
    
    it('should be true on IE browsers', function() {

		var result = preload([
		  'https://www.google.com.au/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
		  'https://www.google.com.au/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
		  ]
		)

        assert.equal(result, undefined);
    })
})