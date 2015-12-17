var fs = require('fs');
var jsen = require('jsen');

var schema = fs.readFileSync('./manifest-schema.json', 'utf8');
var validate = jsen(JSON.parse(schema));

describe('Schema', function() {

  it('should be valid against the extension schema', function() {
    var isValid = validate({
      "manifest_version": 2,
      "name": "Beastify",
      "version": "1.0",
      "applications": {
        "gecko": {
          "id": "beastify@mozilla.org"
        }
      },
    });
    assert.ok(isValid);
  });

  it('should be invalid due to old manifest_version', function() {
    var isValid = validate({
      "manifest_version": 1,
      "name": "Beastify",
      "version": "1.0",
      "applications": {
        "gecko": {
          "id": "beastify@mozilla.org"
        }
      },
    });
    assert.notOk(isValid, validate.errors);
    assert.equal(validate.errors.length, 1);
    //assert.equal(validate.errors[0].path, 'manifest_version', 'contains foo');
  });

});
