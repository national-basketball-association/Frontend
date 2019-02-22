const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('checking functional', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});



