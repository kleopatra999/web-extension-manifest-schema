import validate, { schema } from '../validator';
import { validManifest } from './helpers';


describe('Schema JSON', () => {

  it('should be valid JSON', () => {
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

  it('should be valid against the reference schema', () => {
    var isValid = validate(validManifest);
    assert.ok(isValid);
  });

});
