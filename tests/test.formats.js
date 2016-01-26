import { isValidVersionString } from '../formats';

describe('formats.isValidVersionString', () => {

  it('should be valid version string', () => {
    assert.ok(isValidVersionString('1'));
    assert.ok(isValidVersionString('1.0'));
    assert.ok(isValidVersionString('2.10.2'));
    assert.ok(isValidVersionString('3.1.2.4567'));
    assert.ok(isValidVersionString('3.1.2.65535'));
  });

  it('should not be valid version string', () => {
    assert.notOk(isValidVersionString('123e5'),
                 '123e5 should be disallowed');
    assert.notOk(isValidVersionString('1.'),
                 'Trailing period');
    assert.notOk(isValidVersionString('.'),
                 'Just a period');
    assert.notOk(isValidVersionString('a.b.c.d'),
                 'Not numeric');
    assert.notOk(isValidVersionString('1.2.2.2.4'),
                 'Too many parts');
    assert.notOk(isValidVersionString('01'),
                 'Leading zero not allowed');
    assert.notOk(isValidVersionString('1.000000'),
                 'Multiple zeros not allowed');
    assert.notOk(isValidVersionString('2.99999'),
                 'Part is too large - max is 65535');
    assert.notOk(isValidVersionString('3.65536'),
                 'Number too large - max is 65535');
  });

});
