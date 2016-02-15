import validate from '../validator';
import { validManifest } from './helpers';


describe('Schema Validation', () => {

  it('should be valid against the extension schema', () => {
    var isValid = validate(validManifest);
    assert.ok(isValid);
  });

  it('should be invalid due to old manifest_version', () => {
    validate(Object.assign({}, validManifest, {
      manifest_version: 1,
    }));
    assert.equal(validate.errors[0].dataPath, '/manifest_version');
    assert.equal(validate.errors.length, 1);
  });

  it('should be invalid due to invalid version', () => {
    validate(Object.assign({}, validManifest, {
      version: '01',
    }));
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath, '/version');
  });

  it('should be invalid due to missing version', () => {
    validate(Object.assign({}, validManifest, {
      version: undefined,
    }));
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath, '/version');
    assert.equal(validate.errors[0].params.missingProperty, 'version');
  });

  it('should be invalid due to invalid url', () => {
    var manifest = Object.assign({}, validManifest);
    manifest.applications.gecko.update_url = 'whatevs';
    validate(manifest);
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath, '/applications/gecko/update_url');
  });

});
