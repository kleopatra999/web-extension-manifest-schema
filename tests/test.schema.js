var fs = require('fs');

var schema = fs.readFileSync('./manifest-schema.json', 'utf8');


describe('Schema', function() {

  it('should be valid JSON', function() {
    try {
      JSON.parse(schema);
    } catch (e) {
      if (e instanceof SyntaxError) {
        assert.fail(null, null, 'JSON is invalid: ' + e.message);
      } else {
        throw e;
      }
    }
  });

});
