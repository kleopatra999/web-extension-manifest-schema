import validate from '../validator';
import { validManifest } from './helpers';


describe('Schema', () => {

  it('should be valid against the extension schema', () => {
    var isValid = validate(validManifest);
    assert.ok(isValid, validate.errors);
  });

  it('should be invalid due to old manifest_version', () => {
    var isValid = validate(Object.assign({}, validManifest, {
      manifest_version: 1,
    }));
    assert.notOk(isValid, validate.errors);
    assert.equal(validate.errors[0].dataPath, '.manifest_version');
    assert.equal(validate.errors.length, 1);
  });

  it('should be invalid due to invalid version', () => {
    var isValid = validate(Object.assign({}, validManifest, {
      version: '01',
    }));
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath, '.version');
    assert.notOk(isValid, validate.errors);
  });

});
