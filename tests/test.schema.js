import { schema } from '../validator';

describe('Schema', () => {

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

});
