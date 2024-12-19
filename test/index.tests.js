const assert = require('assert');
const clock = require('..');

describe('Fake Clock', () => {

  it('should default to groundhog day', () => {
    assert.equal(clock.fake().now(), 1454410800000);
  });

  it('should fixed time', () => {
    assert.equal(clock.fake().fix(1469563181761).now(), 1469563181761);
    assert.equal(clock.fake().fix(new Date(1469563181761)).now(), 1469563181761);
    assert.equal(clock.fake().fix(new Date(1469563181761).toISOString()).now(), 1469563181761);
  });

  it('should reject attempts to fix time to an invalid value', () => {
    assert.throws(() => {
      clock.fake().fix('foo');
    }, /Invalid Date: foo/);
  });

});

describe('Real Clock', () => {

  it('should use correct time', () => {
    assert.ok(Math.abs(clock.real().now() - Date.now()) < 100);
  });

});
