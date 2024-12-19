const assert = require('assert');
const { describe, it } = require('zunit');
const clock = require('..');

describe('clocks', () => {

  it('fake clock should default to groundhog day', () => {
    assert.equal(clock.fake().now(), 1454410800000);
  });

  it('fake clock should fixed time', () => {
    assert.equal(clock.fake().fix(1469563181761).now(), 1469563181761);
    assert.equal(clock.fake().fix(new Date(1469563181761)).now(), 1469563181761);
    assert.equal(clock.fake().fix(new Date(1469563181761).toISOString()).now(), 1469563181761);
  });

  it('fake clock should reject attempts to fix time to an invalid value', () => {
    assert.throws(() => {
      clock.fake().fix('foo');
    }, /Invalid Date: foo/);
  });

  it('real clock should use correct time', () => {
    assert.ok(Math.abs(clock.real().now() - Date.now()) < 100);
  });
});
