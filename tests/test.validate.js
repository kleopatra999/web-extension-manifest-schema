import validate from '../validator';
import { validManifest } from './helpers';
import cloneDeep from 'lodash.clonedeep';


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

  it('should be invalid due to invalid update_url', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.update_url = 'whatevs';
    validate(manifest);
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath, '/applications/gecko/update_url');
  });

  it('should be invalid due to invalid strict_min_version type', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.strict_min_version = 42;
    validate(manifest);
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath,
      '/applications/gecko/strict_min_version');
  });

  it('should be invalid due to invalid strict_max_version type', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.strict_max_version = 42;
    validate(manifest);
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath,
      '/applications/gecko/strict_max_version');
  });

  it('should be a valid id (email-like format)', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.id = 'extensionname@example.org';
    assert.ok(validate(manifest));
  });

  it('should be a valid id (guid format)', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.id = '{daf44bf7-a45e-4450-979c-91cf07434c3d}';
    assert.ok(validate(manifest));
  });

  it('should be invalid id format', () => {
    var manifest = cloneDeep(validManifest);
    manifest.applications.gecko.id = 'whatevs';
    validate(manifest);
    assert.equal(validate.errors.length, 1);
    assert.equal(validate.errors[0].dataPath,
      '/applications/gecko/id');
  });

});
