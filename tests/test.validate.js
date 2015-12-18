import jsen from 'jsen';

import { schema, validManifest } from './helpers';

var validate = jsen(JSON.parse(schema));

describe('Schema', () => {

  it('should be valid against the extension schema', () => {
    var isValid = validate(validManifest);
    assert.ok(isValid);
  });

  it('should be invalid due to old manifest_version', () => {
    var isValid = validate(Object.assign({}, validManifest, {
      manifest_version: 1,
    }));
    assert.notOk(isValid, validate.errors);
    assert.equal(validate.errors.length, 1);
  });

});
